import styles from './css/Common.module.css';

function ContentBlock({title, description, style: variant}) {
    return (
        <div className={`${styles.contentBlock} ${styles[variant]}`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ContentBlock;