import React, { useEffect, useState } from 'react';
import Button from '../../Common/Button';
import Title from '../../Common/Title';
import ModalFormSection from '../ModalFormSection/ModalFormSection';
import styles from './RetentionSection.module.css';

function RetentionSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
	return (
		<section className={styles.retentionSection}>
			<div>
				<Title title={'Descubra Seu Potencial!'} style={'titleRetentionSection'}/>
				<p>
					<span className={styles.firstLine}>
						Você pode descobrir sua essência e desenvolver seu potencial reconstruindo sua autoestima.
					</span>
					<br />
					Aprenda a se comunicar de forma assertiva, trabalhe conflitos internos e em seus relacionamentos, e encontre mais sentido e qualidade de vida. O processo terapêutico oferece um espaço acolhedor e seguro para você se conhecer melhor e crescer. Vamos começar essa jornada juntas?
				</p>
					<Button name="Entre em contato por e-mail" style="retentionSectionButton" onClick={openModal} />
					<ModalFormSection isOpen={isModalOpen} onClose={closeModal} />
				<div className={`${styles.flower} ${styles['flower-bottom-left']}`}></div>
				<div className={`${styles.flower} ${styles['flower-top-right']}`}></div>
			</div>
		</section>
	);
}

export default RetentionSection;
