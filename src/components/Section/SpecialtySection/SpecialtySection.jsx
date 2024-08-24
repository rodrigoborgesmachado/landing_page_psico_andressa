import Button from "./Button";
import ContentBoxGrid from "./ContentBoxGrid";
import Title from "./Title";
import styles from './SpecialtySection.module.css';

function SpecialtySection() {
    const boxContents = [
        { id: 1, image: "Rectangle 35.svg", imageDescription: "Imagem representando psicoterapia", title: "Psicoterapia", description: "Atendimento individualizado para desenvolver a autoestima, autoconhecimento e saúde mental." },
        { id: 2, image: "Rectangle 34.svg", imageDescription: "Imagem representando cursos e palestras", title: "Cursos e Palestras", description: "Encontros presenciais e online para aprofundar temas relacionados ao desenvolvimento pessoal." },
        { id: 3, image: "Rectangle 36.svg", imageDescription: "Imagem representando terapia sistêmica", title: "Terapia Sistêmica", description: "Sessões de terapia sistêmica para identificar e transformar padrões familiares." }
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
