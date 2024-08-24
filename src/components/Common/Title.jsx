import styles from './css/Common.module.css';

function Title({ title, style: variant = "title" }) {
    return ( 
        <h1 className={`${styles.Common} ${styles[variant]}`}>{title}</h1>
    );
}

export default Title;
