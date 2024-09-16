import { useEffect, useState } from 'react';
import 'animate.css';
import Button from "../../Common/Button";
import ModalFormSection from '../ModalFormSection/ModalFormSection';
import styles from "./HomeSection.module.css";

const HeroContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false); // Efeitos aplicados apenas à imagem e ao parágrafo

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isModalOpen]);

  useEffect(() => {
    // Controla o tempo de exibição dos elementos
    setTimeout(() => setShowImage(true), 500); // Imagem aparece primeiro
    setTimeout(() => setShowText(true), 1000); // Texto aparece depois
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.heroContent}>
      <img
        src="https://questoesaqui.blob.core.windows.net/psicodede/home_logo.svg"
        alt="logo"
        className={`${showImage ? 'animate__animated animate__slideInLeft' : ''}`}
        style={{ opacity: showImage ? 1 : 0, transition: 'opacity 0.5s ease-in-out', animationFillMode: 'forwards' }}
      />
      <p
        className={`${styles.heroDescription} ${showText ? 'animate__animated animate__slideInLeft' : ''}`}
        style={{ opacity: showText ? 1 : 0, transition: 'opacity 0.5s ease-in-out', animationFillMode: 'forwards' }}
      >
        Venha descobrir quem é você por trás de suas inseguranças e medos, 
        reconstruindo seu mundo interno e colorindo-o com mais autoestima!
      </p>
      <Button
        name="AGENDE UM HORÁRIO"
        style="homeButton"
        onClick={openModal}
      />
      <ModalFormSection isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeroContent;
