import Button from "../../Common/Button";
import styles from "./HomeSection.module.css";

const HeroContent = () => {
  return (
    <div className={styles.heroContent}>
      <img src="images/logo.svg" alt="logo" />
      <p className={styles.heroDescription}>
        Venha descobrir quem é você por trás de suas inseguranças e medos, 
        reconstruindo seu mundo interno e colorindo-o com mais autoestima!
      </p>
      <Button name="Entre em contato" style="homeButton" />
    </div>
  );
};

export default HeroContent;
