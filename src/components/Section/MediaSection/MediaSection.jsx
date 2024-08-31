import Title from '../../Common/Title';
import css from './MediaSection.module.css';
import PublicationAPI from './PublicationAPI/PublicationAPI';

function MediaSection() {
    return (
        <section className={css.mediaSection}>
			<div className={css.mediaTop}>
                <img src="/icons/topo_publicacoes.png" alt="arredondado" className={css.mediaImage} />
            </div>
			<div className={css.mediaContent}>
				<div>
					<Title title={'Últimas publicações'} style={'titleMediaSection'}/>
					<p>Confira as últimas publicações no Instagram e descubra dicas exclusivas para transformar sua autoestima e bem-estar!</p>
				</div>
				<div className={css.publications}>
					<PublicationAPI/>
				</div>
			</div>		
		</section>
    );
}

export default MediaSection;