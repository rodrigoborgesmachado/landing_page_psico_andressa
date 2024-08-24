
import Title from '../../Common/Title';
import css from './BenefitsSection.module.css'
import CircleImageAndTitle from './CircleImageAndTitle/CircleImageAndTitle';

function BenefitsSection() {

	const subtitleImage = [
		{
		  image: "/icons/avatar.png",
		  subtitle: "Autoestima",
		},
		{
		  image: "/icons/natural-mode.png",
		  subtitle: "Bem-estar",
		},
		{
		  image: "../icons/dumbbell.png",
		  subtitle: "Saúde Integral",
		},
		{
		  image: "./icons/every-user.png",
		  subtitle: "Relacionamentos Saudáveis",
		},
		{
		  image: "./icons/crown-three.png",
		  subtitle: "Autoconhecimento",
		},
		{
		  image: "./icons/escalators.png",
		  subtitle: "Resiliência",
		}
	  ]

	return (
		<section>
			<div className={css.benefitsSection}>
				<div className={css.containerDentro}>
					<div className={css.titleDesc}>
						<Title title={'Como a Terapia Ajuda'} style={'titleDefault'}/>
						<h2>Como a Terapia Ajuda</h2>
						<p>O processo terapêutico permite explorar e compreender melhor seus pensamentos e comportamentos, desenvolvendo estratégias eficazes para enfrentar desafios.</p>
						<p>Você terá um espaço seguro para expressar suas preocupações e melhorar a qualidade de seus relacionamentos, resultando em uma vida mais equilibrada e satisfatória.</p>
					</div>
				</div>
				<div className={css.containerDentro}>
					<div className={css.boxes}>
						{subtitleImage.map((item, index) => (
							<CircleImageAndTitle
								key={index} 
								image={item.image}
								title={item.subtitle}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={css.libelula}></div>
			
		</section>
	);
}

export default BenefitsSection;