import PropTypes from 'prop-types';
import React from 'react';
import styles from './ModalFormSection.module.css';
import ModalOverlay from './ModalOverlay';

function ModalFormSection({ isOpen, onClose }) {

    ModalFormSection.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalWrapper}>
            <ModalOverlay onClose={onClose} />
        </div>
    );
}

export default ModalFormSection;
