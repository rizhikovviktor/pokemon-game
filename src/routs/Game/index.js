import {useState, useEffect} from 'react';
import styles from "../Game/style.module.css";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";
import {database} from "../../services/firebase";
import localPokemons from "../../pokemons_data";

const GamePage = () => {
    const [pokemons, setActive] = useState({});
    const [cardsUpdated, setCardsUpdate] = useState(false);

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setActive(snapshot.val());
        });
    }, [cardsUpdated]);

    const onClickCardTurn = (id) => {
        setActive(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const prevCardState = pokemon.active;

                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                }

                if (pokemon.active !== prevCardState)
                {
                    database.ref('pokemons/' + item[0]).set(pokemon);
                }
                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const onClickPokemonAdd = () => {
        setCardsUpdate (prevState => {
            const newKey = database.ref().child('pokemons').push().key;
            database.ref('pokemons/' + newKey).set(localPokemons[localPokemons.length * Math.random() | 0]);

            return !prevState;
        });
    };

    return (
        <Layout
            title='The Game!'
            colorBg='rgba(220, 204, 129, 0.52)'
        >
            <div className={styles.flex}>
                <button onClick={onClickPokemonAdd}>Add Pokemon</button>
            </div>
            <div className={styles.flex}>
                {
                    Object.entries(pokemons)
                        .map(([key, {name, img, id, type, values, active}]) =>
                            <PokemonCard
                                key={key}
                                onClickCardTurn={onClickCardTurn}
                                isActive={active}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                            />)
                }
            </div>
        </Layout>
    );
};

export default GamePage;