    import React from 'react';
    import ModalContent from './ModalContent';
    import styles from './ModalFormSection.module.css';

    function ModalOverlay({ onClose }) {
        return (
            <div className={styles.modalOverlay}>
                <div className={styles.modalContainer}>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                    <ModalContent />
                </div>
            </div>
        );
    }

    export default ModalOverlay;
