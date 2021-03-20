import {useState} from 'react';
import styles from "../Game/style.module.css";
import POKEMONS from "../../pokemons_data";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";
import _ from 'lodash';

const GamePage = () => {

    const pokemons_default = _.cloneDeep(POKEMONS);

    pokemons_default.map(itm => {
        itm.isActive = false;
        return itm
    })

    const [pokemons, setActive] = useState(pokemons_default);

    const onClickBack = (id) => {
        setActive((pok_arr) => {
                return pok_arr.map(itm => {
                    if (id == itm.id) {
                        itm.isActive = !itm.isActive;
                    }
                    return itm;
                });
            }
        )
    }

    return (
        <Layout
            title='The Game!'
            colorBg='rgba(220, 204, 129, 0.52)'
        >
            <div className={styles.flex}>
                {
                    pokemons.map(item => <PokemonCard key={item.id} onClickBack={onClickBack} isActive={item.isActive}
                                                      id={item.id} name={item.name} img={item.img} type={item.type}
                                                      values={item.values}/>)
                }
            </div>
        </Layout>
    );
};

export default GamePage;