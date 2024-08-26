import Button from "./../../Common/Button";
import Title from "./../../Common/Title";
import ContentBoxGrid from "./ContentBoxGrid";
import styles from './SpecialtySection.module.css';

function SpecialtySection() {
    const boxContents = [
        { id: 1, image: "images/specialty01.svg", imageDescription: "Imagem representando psicoterapia", title: "Psicoterapia", description: "Atendimento individualizado para desenvolver a autoestima, autoconhecimento e saúde mental." },
        { id: 2, image: "images/specialty02.svg", imageDescription: "Imagem representando cursos e palestras", title: "Cursos e Palestras", description: "Encontros presenciais e online para aprofundar temas relacionados ao desenvolvimento pessoal." },
        { id: 3, image: "images/specialty03.svg", imageDescription: "Imagem representando terapia sistêmica", title: "Terapia Sistêmica", description: "Sessões de terapia sistêmica para identificar e transformar padrões familiares." }
    ];

    return ( 
        <section className={styles.specialtySection}>
            <Title title="Minha especialidade" style='titleDefault'/>
            <ContentBoxGrid boxContents={boxContents} />
            <Button name="Para Você ou Sua Empresa" />
        </section>
    );
}

export default SpecialtySection;
