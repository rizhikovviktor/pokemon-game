import cn from "classnames";

import styles from "./style.module.css";

const NavBar = ({menuClick, isMenuActive}) => {
    const onClick = () => {
        menuClick && menuClick(!isMenuActive);
    }

    return (
        <nav className={styles.root}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <a onClick={onClick} className={cn(styles.menuButton, {[styles.active]: isMenuActive})}>
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;