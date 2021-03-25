import {useState} from "react";
import cn from 'classnames';
import PokemonCard from "../../../../../../components/PokemonCard";
import styles from "./style.module.css";

const PlayerBoard = ({cards, onClickCard, player}) => {
    const [isSelected, setSelected] = useState(null)

    return (
        <>
            {
                cards.map((item) => (
                    <div
                        onClick={() => {
                            setSelected(item.id)
                            onClickCard && onClickCard({
                                ...item,
                                player
                            })
                        }}
                        className={cn(styles.cardBoard, {[styles.selected]: isSelected == item.id})}>
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            isActive
                            minimize
                        />
                    </div>
                ))
            }
        </>
    );
};

export default PlayerBoard;