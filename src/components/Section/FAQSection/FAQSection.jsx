import { useEffect, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Title from '../../Common/Title';
import './../../Common/css/Common.module.css';
import FAQItem from './FAQItem';
import styles from './FAQSection.module.css';

function FAQSection() {
    const [perguntas, setPerguntas] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        fetch('/perguntas/faq.json')
            .then(response => response.json())
            .then(data => {
                const perguntasAleatorias = data.sort(() => 0.5 - Math.random()).slice(0, 5);
                setPerguntas(perguntasAleatorias);
            });
    }, []);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    // Adicionando o requestAnimationFrame para garantir a transição suave
    useEffect(() => {
        if (openIndex !== null) {
            requestAnimationFrame(() => {
                const openItem = document.querySelectorAll('.faqDetailsContent')[openIndex];
                if (openItem) {
                    openItem.style.opacity = 1; // Garante que a opacidade seja aplicada após o render
                }
            });
        }
    }, [openIndex]);

    return (
        <ParallaxProvider>
            <section className={styles.faqSection}>
                <Parallax className={styles.faqImage} y={[-30, 30]} tag="figure">
                    <div className={styles.imageContent}></div>
                </Parallax>
                <div className={styles.faqBody}>
                    <Title title="Perguntas Comuns, Respostas Úteis" style={'titleFAQSection'} />
                    <div className={styles.faqList}>
                    {perguntas.map((item, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={handleToggle}
                        />
                    ))}
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}

export default FAQSection;
