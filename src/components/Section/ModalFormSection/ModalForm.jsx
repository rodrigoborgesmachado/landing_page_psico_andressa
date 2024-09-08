import React from 'react';
import styles from './ModalFormSection.module.css';

function ModalForm({ form, errors, successMessage, generalErrorMessage, onInputChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="name">Nome:</label>
                <div className={styles.inputWithError}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={onInputChange}
                    />
                    <div className={styles.divErro}>
                        <span className={`${styles.error} ${errors.name ? styles.visible : ''}`}>{errors.name}</span>
                    </div>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="phone1">Celular:</label>
                <div className={styles.inputWithError}>
                    <input
                        type="text"
                        id="phone1"
                        name="phone1"
                        value={form.phone1}
                        onChange={onInputChange}
                    />
                    <span className={`${styles.error} ${errors.phone1 ? styles.visible : ''}`}>{errors.phone1}</span>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail:</label>
                <div className={styles.inputWithError}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={onInputChange}
                    />
                    <span className={`${styles.error} ${errors.email ? styles.visible : ''}`}>{errors.email}</span>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="message">Mensagem:</label>
                <div className={styles.inputWithError}>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={onInputChange}
                    />
                    <span className={`${styles.error} ${errors.message ? styles.visible : ''}`}>{errors.message}</span>
                </div>
            </div>
            <button type="submit" className={styles.submitButton}>Enviar</button>
            <div className={styles.msgEnvio}>
            {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
            {generalErrorMessage && <div className={styles.errorMessage}>{generalErrorMessage}</div>}
            </div>
        </form>
    );
}

export default ModalForm;
