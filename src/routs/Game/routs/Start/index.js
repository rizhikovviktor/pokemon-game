import {useContext, useEffect, useState} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../../../components/PokemonCard";
import Layout from "../../../../components/Layout";
import {PokemonContext} from "../../../../context/pokemonContext"

import styles from "./style.module.css";


const StartPage = () => {
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();

    const [pokemons, setSelected] = useState({});

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setSelected(pokemons);
        });
    }, []);

    const onClickGoToBoard = () => {
        history.push('/game/board');
    };

    const onClickCardActive = (id) => {
        const curPokemon = {...pokemons[id]}

        if (Object.keys(pokemonContext.pokemons).length < 5 || pokemons[id].selected) {
            pokemonContext.onSelectedPokemons(id, curPokemon)

            setSelected(prev => ({
                ...prev,
                [id]: {
                    ...prev[id],
                    selected: !prev[id].selected
                }
            }));
        }
    };

    return (
        <Layout
            title='The Game!'
            colorBg='rgba(220, 204, 129, 0.52)'
        >
            <div className={styles.flex}>
                <button onClick={onClickGoToBoard} disabled={Object.keys(pokemonContext.pokemons).length < 5}>Go to board</button>
            </div>
            <div className={styles.flex}>
                {

                    Object.entries(pokemons)
                        .map(([key, {name, img, id, type, values, selected, minimize}]) =>
                            <PokemonCard
                                key={key}
                                onClickCardTurn={() => onClickCardActive(key)}
                                isActive={true}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                minimize={minimize}
                                className={styles.pokemon_card}
                                isSelected={selected}
                            />)
                }
            </div>
        </Layout>
    );
};

export default StartPage;