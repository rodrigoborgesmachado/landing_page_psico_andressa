import styles from './css/Common.module.css';

function Button({ name, path }) {
    return (
        <a href={path}>
            <input type="button" value={name} className={styles.button} />
        </a>
    );
}

export default Button;
