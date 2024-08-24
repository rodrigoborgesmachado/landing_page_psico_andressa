import styles from './css/Common.module.css';

function ContentBlock({title, description}) {
    return (
        <div className={styles.contentBlock}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ContentBlock;