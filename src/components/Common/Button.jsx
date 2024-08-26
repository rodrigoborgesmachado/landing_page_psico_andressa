import React from 'react';
import styles from './css/Common.module.css';

function Button({ name, path, onClick }) {
    return (
        <button onClick={onClick} className={styles.button}>
            {name}
        </button>
    );
}

export default Button;
