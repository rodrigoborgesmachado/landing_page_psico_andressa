import React, { useEffect, useState } from 'react';
import ModalForm from './ModalForm';
import styles from './ModalFormSection.module.css';

function ModalContent() {
    const [form, setForm] = useState({ name: '', phone1: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', phone1: '', email: '', message: '' });
    const [generalErrorMessage, setGeneralErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        setForm({ name: '', phone1: '', email: '', message: '' });
        setErrors({ name: '', phone1: '', email: '', message: '' });
        setGeneralErrorMessage('');
        setSuccessMessage('');
    }, []);

    const handleInputChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: '' });
        setSuccessMessage('');
        setGeneralErrorMessage('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setSuccessMessage("Mensagem enviada com sucesso!");
            setGeneralErrorMessage('');
            setForm({ name: '', phone1: '', email: '', message: '' });
        } else {
            setGeneralErrorMessage("Por favor, corrija os erros acima antes de enviar.");
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (form.name.length < 3) {
            newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
            valid = false;
        }

        const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/;
        if (!phoneRegex.test(form.phone1)) {
            newErrors.phone1 = "O telefone deve estar no formato (99) 99999-9999.";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            newErrors.email = "Por favor, insira um e-mail válido.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    return (
        <div className={styles.modalContent}>
            <div className={styles.imageContainer}></div>
            <div className={styles.formContainer}>
                <h2>Entre em contato</h2>
                <ModalForm
                    form={form}
                    errors={errors}
                    successMessage={successMessage}
                    generalErrorMessage={generalErrorMessage}
                    onInputChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default ModalContent;
