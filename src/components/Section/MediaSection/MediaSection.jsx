import React from 'react';
import css from './MediaSection.module.css'
import Title from '../../Common/Title';

function MediaSection() {
    return (
        <section className={css.mediaSection}>
			<div >
				<div>
					<div>
						<Title title={'Últimas publicações'} style={'titleMediaSection'}/>
						<p>Confira as últimas publicações no Instagram e descubra dicas exclusivas para transformar sua autoestima e bem-estar!</p>
					</div>
				</div>
				{/* <div>
					<div className={css.boxesGroupIcons}>
						{subtitleImage.map((item, index) => (
							<CircleImageAndTitle
								key={index} 
								image={item.image}
								title={item.subtitle}
							/>
						))}
					</div>
				</div> */}
			</div>		
		</section>
    );
}

export default MediaSection;