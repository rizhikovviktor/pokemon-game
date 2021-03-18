import styles from "./style.module.css";
import MenuHeader from "../MenuHeader";

const Header = ({title, descr, onClickButton,children}) => {
    const handlerClick = () => {
        onClickButton && onClickButton('game');
    }
    return (
        <>
            <MenuHeader />
            <header className={styles.root}>
                <div className={styles.forest}></div>
                <div className={styles.container}>
                    {title && (<h1>{title}</h1>)}
                    {descr && (<p>{descr}</p>)}
                    <button onClick={handlerClick}>
                        Start Game
                    </button>

                </div>
            </header>
        </>
    )
}

export default Header;