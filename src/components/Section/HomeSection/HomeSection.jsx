import React, { useEffect, useState } from 'react';
import HomeContent from "./HomeContent";
import styles from "./HomeSection.module.css";

function HomeSection() {
    const [isVisible, setIsVisible] = useState(true);

    // Função para detectar quando o usuário está na última seção
    useEffect(() => {
        const handleScroll = () => {
            const lastSection = document.getElementById('last-section');
            const bottomOfLastSection = lastSection?.getBoundingClientRect().top < window.innerHeight;
            
            // Se estiver na última seção, esconde a seta
            setIsVisible(!bottomOfLastSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.homeSection} id={"home"}>
            <div>
                <HomeContent />
            </div>
            {isVisible && (
                <img
                    src="/icons/Seta_paraBaixo.png"
                    alt="Seta para baixo"
                    className={styles.arrowIcon} // Classe específica para o ícone
                />
            )}
        </section>
    );
}

export default HomeSection;
