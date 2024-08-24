import styles from './SpecialtySection.module.css';

function ContentBox({ image, title, description, imageDescription }) {
    return (
        <div className={styles.contentBox}>
            <img src={image} alt={imageDescription} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ContentBox;
