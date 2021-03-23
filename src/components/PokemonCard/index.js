import cn from 'classnames';
import styles from "./style.module.css";


const PokemonCard = ({id, name, img, type, values, isActive, minimize, className, onClickCardTurn, isSelected}) => {
    const handleOnClick = () => {
        onClickCardTurn(id, !isActive);
    };

    return (
        <div onClick={handleOnClick}
             className={cn(className, styles.pokemonCard, {[styles.active]: isActive, [styles.selected]: isSelected})}>
            <div className={styles.cardFront}>
                <div className={cn(styles.wrap, styles.front)}>
                    <div className={cn(styles.pokemon, styles[type])}>
                        <div className={styles.values}>
                            <div className={cn(styles.count, styles.top)}>{values.top}</div>
                            <div className={cn(styles.count, styles.right)}>{values.right}</div>
                            <div className={cn(styles.count, styles.bottom)}>{values.bottom}</div>
                            <div className={cn(styles.count, styles.left)}>{values.left}</div>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={img} alt={name}/>
                        </div>
                        {!minimize && (<div className={styles.info}>
                            <span className={styles.number}>#{id}</span>
                            <h3 className={styles.name}>
                                {name}
                            </h3>
                            <small className={styles.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className={styles.cardBack}>
                <div className={cn(styles.wrap, styles.back)}/>
            </div>

        </div>
    )
};

export default PokemonCard;