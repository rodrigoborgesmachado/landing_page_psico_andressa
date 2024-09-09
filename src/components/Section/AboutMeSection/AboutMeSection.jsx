import Title from '../../Common/Title';
import styles from './AboutMeSection.module.css';
import ContentBlock from '../../Common/ContentBlock';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

    return (<>
            <section className={styles.aboutMeSection}>
                <div>
                    <Title title={'Sobre Minha Jornada'}/>
                    <div>
                        <div>
                            <ContentBlock title={boxTopicos[0].title} description={boxTopicos[0].description}
                                          style="aboutMeContent"/>
                            <ContentBlock title={boxTopicos[1].title} description={boxTopicos[1].description}
                                          style="aboutMeContent"/>
                        </div>
                        <div className={styles.boxImages}>
                            <img src="images/andressa1.svg" alt="Foto da Psicóloga Andressa em um auditório"/>
                            <img src="images/andressa2.svg" alt="Foto da Psicóloga Andressa"/>
                        </div>
                        <div>
                            <ContentBlock title={boxTopicos[2].title} description={boxTopicos[2].description}
                                          style="aboutMeContent"/>
                            <ContentBlock title={boxTopicos[3].title} description={boxTopicos[3].description}
                                          style="aboutMeContent"/>
                        </div>
                    </div>
                    <div className={styles.centralizedContent}>
                        <ContentBlock title={boxTopicos[4].title} description={boxTopicos[4].description}
                                      style="aboutMeContent"/>
                    </div>
                    {/* Adicionando a libélula aqui */}
                    <div className={styles.libelulaAboutMe}>
                        <img src="/images/AboutMe_Right_Libelula.svg" alt="libelula"/>
                    </div>
                </div>
            </section>
            <section className={styles.mobileAboutMeSection}>
                <div>
                    <Title title={'Sobre Minha Jornada'}/>
                    <div className={styles.mobileBoxImages}>
                        <img src="images/andressa1.svg" alt="Foto da Psicóloga Andressa em um auditório"/>
                        <img src="images/andressa2.svg" alt="Foto da Psicóloga Andressa"/>
                    </div>
                    <span className={styles.mobileCarousel}>
                        <Carousel
                            showThumbs={false}   // Remove as miniaturas de imagens
                            showStatus={false}   // Remove o contador de slides
                            autoPlay            // Reproduz automaticamente
                            infiniteLoop        // Faz o loop infinito
                            interval={5000}     // Intervalo de 4 segundos entre slides
                            transitionTime={1000}  // Tempo de transição entre slides
                            stopOnHover         // Pausa o autoplay ao passar o mouse por cima
                            className={styles.carousel}
                        >
                            {boxTopicos.map((topico, index) => (<ContentBlock
                                key={index}
                                title={topico.title}
                                description={topico.description}
                                style="aboutMeContentMobile"
                            />))}
                        </Carousel>
                    </span>
                </div>
            </section>
        </>

    );
}

export default AboutMeSection;
