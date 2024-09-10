import React, { useEffect, useRef, useState } from 'react';
import Title from '../../Common/Title';
import styles from './AboutMeSection.module.css';
import ContentBlock from '../../Common/ContentBlock';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css';

function AboutMeSection() {
    const boxTopicos = [{
        id: 0,
        title: "Formação Acadêmica",
        description: "Graduada em Psicologia e pós-graduada em Psicologia Analítica de Carl Gustav Jung. Invisto constantemente em cursos que abordam a cura do feminino, maternidade, autoconhecimento e relacionamentos."
    }, {
        id: 1,
        title: "Valores e Missão",
        description: "Comprometida com a formação contínua, ajudo minhas clientes a desenvolver autoestima através de um profundo processo de autoconhecimento, com o objetivo de alcançar saúde integral, autonomia e relacionamentos mais saudáveis."
    }, {
        id: 2,
        title: "Abordagem Terapêutica",
        description: "Combino a psicoterapia com a psicoeducação, utilizando as teorias da Análise Transacional, Psicologia Analítica e Psicanálise, para atuar no desenvolvimento da autonomia do paciente."
    }, {
        id: 3,
        title: "Diferenciais",
        description: "Trabalho com uma abordagem dinâmica e personalizada, buscando desenvolver a sua autonomia e focando em um processo fluido, com cada vez menos dependência da psicoterapia para compreender conflitos internos e externos."
    }, {
        id: 4,
        title: "Experiência",
        description: "Ministrei palestras e treinamentos na área da saúde, além de atuar com Terapia Sistêmica, o que me possibilitou trabalhar com dinâmicas e padrões familiares."
    }];

    const [visibleIndices, setVisibleIndices] = useState([]);
    const sectionRefs = useRef([]);
    sectionRefs.current = boxTopicos.map((_, i) => sectionRefs.current[i] ?? React.createRef());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.findIndex(ref => ref.current === entry.target);
                        if (!visibleIndices.includes(index)) {
                            // Introduz um atraso sutil entre as animações
                            setTimeout(() => {
                                setVisibleIndices((prevVisibleIndices) => [...prevVisibleIndices, index]);
                            }, getDelay(index));
                        }
                    }
                });
            },
            { threshold: 0.1 } // Inicia quando 10% do componente estiver visível
        );

        sectionRefs.current.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [visibleIndices]);

    // Função que define o tempo de atraso em milissegundos para cada índice
    const getDelay = (index) => {
        switch (index) {
            case 0: return 0;   // Primeira animação
            case 2: return 200; // Segunda animação
            case 1: return 400; // Terceira animação
            case 3: return 600; // Quarta animação
            case 4: return 800; // Última animação
            default: return 0;
        }
    };

    const getAnimationClass = (index) => {
        switch (index) {
            case 0:
                return 'animate__animated animate__fadeInTopLeft';
            case 1:
                return 'animate__animated animate__fadeInBottomLeft';
            case 2:
                return 'animate__animated animate__fadeInTopRight';
            case 3:
                return 'animate__animated animate__fadeInBottomRight';
            case 4:
                return 'animate__animated animate__fadeInUp';
            default:
                return '';
        }
    };

    return (
        <>
            <section id={'sobre'} className={styles.aboutMeSection}>
                <div>
                    <Title title={'Sobre Minha Jornada'} />
                    <div>
                        <div>
                            {boxTopicos.slice(0, 2).map((topico, index) => (
                                <div
                                    ref={sectionRefs.current[index]}
                                    key={index}
                                    className={`${styles.aboutMeContent} ${visibleIndices.includes(index) ? getAnimationClass(index) : ''}`}
                                    style={{ opacity: visibleIndices.includes(index) ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                                >
                                    <ContentBlock title={topico.title} description={topico.description} style="aboutMeContent" />
                                </div>
                            ))}
                        </div>
                        <div className={styles.boxImages}>
                            <img src="images/andressa1.svg" alt="Foto da Psicóloga Andressa em um auditório" />
                            <img src="images/andressa2.svg" alt="Foto da Psicóloga Andressa" />
                        </div>
                        <div>
                            {boxTopicos.slice(2, 4).map((topico, index) => (
                                <div
                                    ref={sectionRefs.current[index + 2]}
                                    key={index + 2}
                                    className={`${styles.aboutMeContent} ${visibleIndices.includes(index + 2) ? getAnimationClass(index + 2) : ''}`}
                                    style={{ opacity: visibleIndices.includes(index + 2) ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                                >
                                    <ContentBlock title={topico.title} description={topico.description} style="aboutMeContent" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.centralizedContent}>
                        <div
                            ref={sectionRefs.current[4]}
                            className={`${styles.aboutMeContent} ${visibleIndices.includes(4) ? getAnimationClass(4) : ''}`}
                            style={{ opacity: visibleIndices.includes(4) ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                        >
                            <ContentBlock title={boxTopicos[4].title} description={boxTopicos[4].description} style="aboutMeContent" />
                        </div>
                    </div>
                    <div className={styles.libelulaAboutMe}>
                        <img src="/images/AboutMe_Right_Libelula.svg" alt="libelula" />
                    </div>
                </div>
            </section>
            <section className={styles.mobileAboutMeSection}>
                <div>
                    <Title title={'Sobre Minha Jornada'} />
                    <div className={styles.mobileBoxImages}>
                        <img src="images/andressa1.svg" alt="Foto da Psicóloga Andressa em um auditório" />
                        <img src="images/andressa2.svg" alt="Foto da Psicóloga Andressa" />
                    </div>
                    <span className={styles.mobileCarousel}>
                        <Carousel
                            showThumbs={false}  // Remove as miniaturas de imagens
                            showStatus={false}   // Remove o contador de slides
                            autoPlay            // Reproduz automaticamente
                            infiniteLoop        // Faz o loop infinito
                            interval={5000}     // Intervalo de 4 segundos entre slides
                            transitionTime={1000}  // Tempo de transição entre slides
                            stopOnHover         // Pausa o autoplay ao passar o mouse por cima
                            className={styles.carousel}
                        >
                            {boxTopicos.map((topico, index) => (
                                <ContentBlock
                                    key={index}
                                    title={topico.title}
                                    description={topico.description}
                                    style="aboutMeContentMobile"
                                />
                            ))}
                        </Carousel>
                    </span>
                </div>
            </section>
        </>
    );
}

export default AboutMeSection;
