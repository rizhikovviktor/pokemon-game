import cn from "classnames";
import styles from "./style.module.css";
import {Link} from "react-router-dom";

const menuRouts = [
    {
        name: 'HOME',
        url: '/'
    },
    {
        name: 'GAME',
        url: 'game'
    },
    {
        name: 'ABOUT',
        url: 'about'
    },
    {
        name: 'CONTACT',
        url: 'contact'
    },
];

const Menu = ({isMenuActive, menuClick}) => {
    const handleMenuItemClick = () => {
        menuClick(!isMenuActive);
    }

    return (
        <div className={cn(styles.menuContainer, {
            [styles.active]: isMenuActive === true,
            [styles.deactive]: isMenuActive === false
        })}>
            <div className={styles.overlay} />
            <div className={styles.menuItems}>
                <ul>
                    {
                        menuRouts.map(({name, url}, index) => (
                            <li key={index}>
                                <Link to={url} onClick={handleMenuItemClick}>
                                    {name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;