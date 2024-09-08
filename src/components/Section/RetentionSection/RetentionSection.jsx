import { useEffect, useState, useRef } from 'react';
import Button from '../../Common/Button';
import Title from '../../Common/Title';
import ModalFormSection from '../ModalFormSection/ModalFormSection';
import styles from './RetentionSection.module.css';
import 'animate.css';

function RetentionSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null); // Ref para a seção que será observada

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isModalOpen]);

    useEffect(() => {
        // Cria o IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Exibir quando estiver visível e aplicar a animação
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.05, // 5% da seção visível
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observa a div
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Limpa o observador quando o componente desmonta
            }
        };
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={styles.retentionSection}>
            <div
                ref={sectionRef} // Associa o ref à div
                // Usa `opacity: 0` até que o conteúdo seja visível
                className={`${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            >
                <Title title={'Descubra Seu Potencial!'} style={'titleRetentionSection'} />
                <p>
                    <span className={styles.firstLine}>
                        Você pode descobrir sua essência e desenvolver seu potencial reconstruindo sua autoestima.
                    </span>
                    <br />
                    Aprenda a se comunicar de forma assertiva, trabalhe conflitos internos e em seus relacionamentos, e encontre mais sentido e qualidade de vida. O processo terapêutico oferece um espaço acolhedor e seguro para você se conhecer melhor e crescer. Vamos começar essa jornada juntas?
                </p>
                <Button name="Entre em contato por e-mail" style="retentionSectionButton" onClick={openModal} />
                <div className={`${styles.flower} ${styles['flower-bottom-left']}`}></div>
                <div className={`${styles.flower} ${styles['flower-top-right']}`}></div>
            </div>
            <ModalFormSection isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}

export default RetentionSection;
