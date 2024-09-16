import React from 'react';
import styles from './ModalFormSection.module.css';

function ModalWaiting() {

    return (
        <div className={styles.modalPage}>
            <div className={styles.spinner}></div>
        </div>
    );
}

export default ModalWaiting;
