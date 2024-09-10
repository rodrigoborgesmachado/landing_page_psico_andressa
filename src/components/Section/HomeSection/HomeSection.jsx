import HomeContent from "./HomeContent";
import styles from "./HomeSection.module.css";

function HomeSection() {
    return (
        <section className={styles.homeSection} id={"home"}>
            <div>
                <HomeContent />
            </div>
        </section>
    );
}

export default HomeSection;