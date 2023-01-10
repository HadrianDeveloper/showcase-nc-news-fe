import styles from '../css/Error404.module.css';

export default function Error404() {
    return (
        <main className={styles.main}>
            <img 
                src='https://img.icons8.com/fluency/512/nothing-found.png' 
                alt='page not found'
                className={styles.notfound}
            />
            <h2>Page not found!</h2>
        </main>
    )
};