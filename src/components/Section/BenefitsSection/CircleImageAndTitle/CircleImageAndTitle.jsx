import css from './CircleImageAndTitle.module.css';

import PropTypes from 'prop-types';

function CircleImageAndTitle({image, title}) {

	return (
		<div className={css.container}>
			<div className={css.circle}>
				<img src={image} alt={title} className={css.image} />
			</div>
			<h3 className={css.title}>{title}</h3>
		</div>
	);
	
}

CircleImageAndTitle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CircleImageAndTitle;