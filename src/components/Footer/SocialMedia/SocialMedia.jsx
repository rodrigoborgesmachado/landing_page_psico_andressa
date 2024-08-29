import PropTypes from 'prop-types';
import css from './SocialMedia.module.css';

function SocialMedia({image, link, descricao}) {
	
	return (
		<div className={css.containerFooterMedia}>
			<div>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<img src={image} alt={descricao} className={css.network}/>
				</a>
			</div>
		</div>
	);
}

SocialMedia.propTypes = {
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	descricao: PropTypes.string.isRequired
};

export default SocialMedia;