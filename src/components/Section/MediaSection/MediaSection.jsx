import Title from '../../Common/Title';
import css from './MediaSection.module.css';
import PublicationAPI from './PublicationAPI/PublicationAPI';
import { useMediaQuery } from 'react-responsive';
import PublicationApiMobile from './PublicationApiMobile/PublicationApiMobile';


function MediaSection() {

	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <section className={css.mediaSection}>
			<div className={css.mediaTop}>
                <img src="/icons/topo_publicacoes.png" alt="arredondado" className={css.mediaImage} />
            </div>
			<div className={css.mediaContent}>
				<div className={css.lastPublications}>
					<Title title={'Últimas publicações'} style={'titleMediaSection'}/>
					<p>Confira as últimas publicações no Instagram e descubra dicas exclusivas para transformar sua autoestima e bem-estar!</p>
				</div>
				<div className={css.publications}>
				{isMobile ? (
      				  <PublicationApiMobile/> // Renderiza componente mobile
      				) : (
      				  <PublicationAPI/> // Renderiza componente desktop
      				)}
				</div>
			</div>		
		</section>
    );
}

export default MediaSection;