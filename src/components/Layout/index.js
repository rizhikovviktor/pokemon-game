import cn from 'classnames';
import styles from "./style.module.css";

const Layout = ({title = false, urlBg = false, colorBg = false, children}) => {
    const style = {
        backgroundImage: urlBg ? 'url("' + urlBg + '")' : 'none',
        backgroundColor: colorBg ? colorBg : 'white'
    }

    return (
        <section
            className={styles.root}
            style={style}
        >
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        {title && (<h3>{title}</h3>)}
                        <span className={styles.separator}></span>
                    </div>
                    <div className={cn(styles.desc, styles.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;