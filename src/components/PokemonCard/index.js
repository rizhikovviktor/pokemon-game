import { useState } from 'react';

import styles from "./style.module.css";
import cardBackSide from "./assets/card-back-side.jpg";

const PokemonCard = ({id, name, img, type, values}) => {
    const [isActive, setActive] = useState(false);
    const onClick = () => {
        setActive(!isActive);
    }

    return (
        <div className={styles.root} onClick={onClick}>
            <div className={`${styles.pokemonCard} ${isActive ? styles.active : ''}`}>
                <div className={styles.cardFront}>
                    <div className={`${styles.wrap} ${styles.front}`}>
                        <div className={`${styles.pokemon} ${styles[type]}`}>
                            <div className={styles.values}>
                                <div className={`${styles.count} ${styles.top}`}>{values.top}</div>
                                <div className={`${styles.count} ${styles.right}`}>{values.right}</div>
                                <div className={`${styles.count} ${styles.bottom}`}>{values.bottom}</div>
                                <div className={`${styles.count} ${styles.left}`}>{values.bottom}</div>
                            </div>
                            <div className={styles.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.number}>#{id}</span>
                                <h3 className={styles.name}>{name}</h3>
                                <small className={styles.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cardBack}>
                    <div className={`${styles.wrap} ${styles.back}`}>
                        <img src={cardBackSide} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;