import css from './CardPublication.module.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function CardPublication({link, image, title, description}) {

	CardPublication.propTypes = {
		link: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	};

	return (
		<div className={css.cardPubli}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div className={css.card}>
					<img src={image} alt="" className={css.imageCard}/>
					<div className={css.cardWrapper}>
						<h3>{title}</h3>
						<p>Leia mais</p>
						<img src='/icons/insta_red.png' alt="instagram" className={css.insta}/>
					</div>
				</div> 
			</a>
		</div>
	);
}

export default CardPublication;