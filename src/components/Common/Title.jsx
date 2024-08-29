import PropTypes from 'prop-types';
import styles from './css/Common.module.css';

function Title({ title, style: variant }) {
    return ( 
        <h2 className={`${styles.titleDefault} ${styles[variant]}`}>{title}</h2>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string
};

export default Title;
