import PropTypes from 'prop-types';
import styles from './css/Common.module.css';

function Button({ name, onClick, id, className, style: variant = "", path }) {
    return (
        <button
            id={id || undefined} // Aplica o id se fornecido
            className={`${styles.button} ${styles[variant]} ${className || ""}`} // Aplica a classe se fornecida
            onClick={onClick}
        >
            {name}
        </button>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string, // Adicionando a prop `id`
    className: PropTypes.string, // Adicionando a prop `className`
    style: PropTypes.string, // Mantendo a prop `variant` para o estilo do CSS module
    path: PropTypes.string,
};

export default Button;
