import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import styles from './ModalFormSection.module.css';

import PropTypes from 'prop-types';

function ModalFormSection({ isOpen, onClose }) {

    ModalFormSection.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };
    
    const [form, setForm] = useState({ name: '', phone1: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', phone1: '', email: '', message: '' });
    const [generalErrorMessage, setGeneralErrorMessage] = useState(''); // Estado para mensagem de erro geral
    const [successMessage, setSuccessMessage] = useState(''); // Estado para mensagem de sucesso

    // Limpa o formulário e as mensagens ao fechar o modal
    useEffect(() => {
        if (!isOpen) {
            setForm({ name: '', phone1: '', email: '', message: '' });
            setErrors({ name: '', phone1: '', email: '', message: '' });
            setGeneralErrorMessage('');
            setSuccessMessage('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    function handleInputChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: '' }); // Limpa o erro específico ao digitar
        setSuccessMessage(''); // Limpa a mensagem de sucesso ao digitar
        setGeneralErrorMessage(''); // Limpa a mensagem de erro geral ao digitar
    }

    function validateForm() {
        let valid = true;
        let newErrors = {};

        // Validação do nome (mínimo 3 caracteres)
        if (form.name.length < 3) {
            newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
            valid = false;
        }

        // Validação do telefone com Regex para formatos brasileiros (DDD opcional, 9 dígitos, etc.)
        const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/;
        if (!phoneRegex.test(form.phone1)) {
            newErrors.phone1 = "O telefone deve estar no formato (99) 99999-9999.";
            valid = false;
        }

        // Validação do email (formato válido)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            newErrors.email = "Por favor, insira um e-mail válido.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (validateForm()) {
            const templateParams = {
                from_name: form.name,
                from_phone1: form.phone1,
                from_email: form.email,
                from_message: form.message,
            };

            emailjs.send(
                "service_hysguz8",
                "template_b7rtc19",
                templateParams,
                "OMNIzE9WsENhpBoeD"
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMessage("Mensagem enviada com sucesso!"); // Define a mensagem de sucesso
                    setGeneralErrorMessage(''); // Limpa qualquer mensagem de erro geral
                    setForm({ name: '', phone1: '', email: '', message: '' }); // Limpa o formulário
                },
                (error) => {
                    console.log('FAILED...', error);
                    setGeneralErrorMessage("Ocorreu um erro ao enviar a mensagem. Tente novamente."); // Define a mensagem de erro
                }
            );
        } else {
            setGeneralErrorMessage("Por favor, corrija os erros acima antes de enviar."); // Mensagem de erro geral
        }
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.modalContent}>
                    <div className={styles.imageContainer}></div> {/* A imagem será definida no CSS */}
                    <div className={styles.formContainer}>
                        <h2>Entre em contato</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Nome:</label>
                                <div className={styles.inputWithError}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder=""
                                        value={form.name}
                                        onChange={handleInputChange}
                                    />
                                    <span className={`${styles.error} ${errors.name ? styles.visible : ''}`}>{errors.name}</span>
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="phone1">Celular:</label>
                                <div className={styles.inputWithError}>
                                    <input
                                        type="text"
                                        id="phone1"
                                        name="phone1"
                                        placeholder=""
                                        value={form.phone1}
                                        onChange={handleInputChange}
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
                                        placeholder=""
                                        value={form.email}
                                        onChange={handleInputChange}
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
                                        placeholder=""
                                        value={form.message}
                                        onChange={handleInputChange}
                                    />
                                    <span className={`${styles.error} ${errors.message ? styles.visible : ''}`}>{errors.message}</span>
                                </div>
                            </div>
                            {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
                            {generalErrorMessage && <div className={styles.errorMessage}>{generalErrorMessage}</div>}
                            <button type="submit" className={styles.submitButton}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFormSection;
