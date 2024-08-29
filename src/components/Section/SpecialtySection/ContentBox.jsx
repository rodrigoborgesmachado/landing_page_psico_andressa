import styles from './SpecialtySection.module.css';
import ContentBlock from './../../Common/ContentBlock';
import PropTypes from 'prop-types';

function ContentBox({ image, title, description, imageDescription }) {
    
    ContentBox.propTypes = {
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageDescription: PropTypes.string.isRequired,
    };
    return (
        <div className={styles.contentBox}>
            <img src={image} alt={imageDescription} />
            <ContentBlock title={title} description={description} />
        </div>
    );
}

export default ContentBox;
