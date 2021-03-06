import cn from "classnames";

import styles from "./style.module.css";

const NavBar = ({menuClick, isMenuActive, bgActive}) => {
    const onClick = () => {
        menuClick && menuClick(!isMenuActive);
    };

    return (
        <nav className={cn (styles.root, ({[styles.bgActive]: bgActive}))}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <div onClick={onClick} className={cn(styles.menuButton, {[styles.active]: isMenuActive})}>
                    <span/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;