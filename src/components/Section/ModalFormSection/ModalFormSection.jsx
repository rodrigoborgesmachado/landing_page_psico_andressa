import React from 'react';
import styles from './ModalFormSection.module.css';

function ModalFormSection({ isOpen, onClose }) {
    console.log('ModalFormSection rendered with isOpen:', isOpen);
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.modalContent}>
                    <div className={styles.imageContainer}>
                        <img src="your-image-url.jpg" alt="Imagem descritiva" />
                    </div>
                    <div className={styles.formContainer}>
                        <h2>Entre em contato</h2>
                        <form>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" name="name" placeholder="Fulano de tal" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="phone1">Telefone:</label>
                                <input type="text" id="phone1" name="phone1" placeholder="34 3232 3232" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="phone2">Telefone:</label>
                                <input type="text" id="phone2" name="phone2" placeholder="Outro telefone (opcional)" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Mensagem:</label>
                                <textarea id="message" name="message" placeholder="Olá, tudo bem? Gostaria de agendar uma consulta"></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFormSection;
