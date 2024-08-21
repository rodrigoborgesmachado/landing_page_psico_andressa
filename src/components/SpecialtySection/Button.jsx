import styles from './css/Button.module.css';

function Button({ name, path }) {
    return (
        <a href={path}>
            <input type="button" value={name} className={styles.button} />
        </a>
    );
}

export default Button;
