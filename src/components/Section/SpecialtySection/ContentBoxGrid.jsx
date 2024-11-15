import PropTypes from 'prop-types';
import styles from './SpecialtySection.module.css';
import ContentBox from "./ContentBox";

function ContentBoxGrid({ boxContents }) {
    return ( 
        <div className={styles.contentBoxGrid}>
            {boxContents.map(box => 
                <ContentBox 
                    key={box.id} 
                    image={box.image} 
                    imageDescription={box.imageDescription} 
                    title={box.title} 
                    description={box.description} />
            )}
        </div>
    );
}

ContentBoxGrid.propTypes = {
    boxContents: PropTypes.array.isRequired
};

export default ContentBoxGrid;
