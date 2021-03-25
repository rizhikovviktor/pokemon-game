import {PokemonContext} from "../../../../context/pokemonContext";
import {useContext} from "react";
import PokemonCard from "../Start";
import styles from "./style.module.css"

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);

    return (
        <PokemonContext.Provider value={{}}>
            <div className={styles.root}>
                <div className={styles.playerOne}>
                    {
                        Object.values(pokemons)
                            .map(({id, name, img, type, values}) => (
                                <PokemonCard
                                    key={id}
                                    isActive={true}
                                    id={id}
                                    name={name}
                                    img={img}
                                    type={type}
                                    values={values}
                                    minimize = {true}
                                    className = {styles.card}
                                />))
                    }
                </div>
                <div className={styles.board}>
                    <div className={styles.boardPlate}>1</div>
                    <div className={styles.boardPlate}>2</div>
                    <div className={styles.boardPlate}>3</div>
                    <div className={styles.boardPlate}>4</div>
                    <div className={styles.boardPlate}>5</div>
                    <div className={styles.boardPlate}>6</div>
                    <div className={styles.boardPlate}>7</div>
                    <div className={styles.boardPlate}>8</div>
                    <div className={styles.boardPlate}>9</div>
                </div>
            </div>
        </PokemonContext.Provider>
    );
};

export default BoardPage;