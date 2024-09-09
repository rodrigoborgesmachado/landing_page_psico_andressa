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
    
        // Valida o formulário antes de enviar
        if (validateForm()) {
            // Cria o FormData com os dados do formulário
            const formData = new FormData();
            formData.append('service_id', 'service_4hwfzpt'); // Substitua pelos valores corretos
            formData.append('template_id', 'template_f3fldt9');
            formData.append('user_id', '0WR7BbjH3pvzp1Dj2');
            formData.append('from_name', form.name);
            formData.append('from_phone1', form.phone1);
            formData.append('from_email', form.email);
            formData.append('from_message', form.message);
    
            // Envio do formulário via fetch
            fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then((response) => {
                if (response.ok) {
                    // Exibe a mensagem de sucesso após o envio do email
                    setSuccessMessage("Mensagem enviada com sucesso!");
                    setGeneralErrorMessage('');
                    // Limpa o formulário
                    setForm({ name: '', phone1: '', email: '', message: '' });
                } else {
                    return response.text().then(text => { throw new Error(text) });
                }
            })
            .catch((error) => {
                // Exibe uma mensagem de erro caso o envio falhe
                setGeneralErrorMessage("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
                console.error('Erro:', error);
            });
        } else {
            // Se a validação falhar, exibe uma mensagem de erro
            setGeneralErrorMessage("Por favor, corrija os erros acima antes de enviar.");
            setSuccessMessage('');
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
