import { useState } from 'react';
import cn from "classnames";

import styles from "./style.module.css";

const NavBar = ({menuClick}) => {
    const [isActive, setActive] = useState(false);
    const onClick = () => {
        setActive(!isActive);
        menuClick && menuClick(!isActive);
    }

    return (
        <nav className={styles.root}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <a onClick={onClick} className={cn(styles.menuButton, {[styles.active]: isActive})}>
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;