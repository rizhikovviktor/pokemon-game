import styles from "./style.module.css";

const Layout = ({title = false, descr = false, urlBg = false, colorBg = false}) => {
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
                    <div className={[styles.desc, styles.full].join(' ')}>
                        {descr && (<h3>{descr}</h3>)}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;