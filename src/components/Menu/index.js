import cn from "classnames";

import styles from "./style.module.css";
import POKEMONS from "../../pokemons_data";
import PokemonCard from "../PokemonCard";
const menuRouts = [
    {
        name: 'HOME',
        url: 'welcome'
    },
    {
        name: 'GAME',
        url: 'game'
    },
    {
        name: 'ABOUT',
        url: '#about'
    },
    {
        name: 'CONTACT',
        url: '#contact'
    },
];

const Menu = ({isMenuActive}) => {

    return (
        <div className={cn(styles.menuContainer, {[styles.active]: isMenuActive, [styles.deactive]: !isMenuActive})}>
            <div className={styles.overlay} />
            <div className={styles.menuItems}>
                <ul>
                    {
                        menuRouts.map(item  => <li><a href={item.url}>{item.name}</a></li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;