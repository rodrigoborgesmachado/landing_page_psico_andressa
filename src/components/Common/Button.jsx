import PropTypes from 'prop-types';
import styles from './css/Common.module.css';

// eslint-disable-next-line no-unused-vars
function Button({ name, onClick, style: variant = "", path }) {
    return (
        <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
            {name}
        </button>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.string,
    path: PropTypes.string,
};

export default Button;
