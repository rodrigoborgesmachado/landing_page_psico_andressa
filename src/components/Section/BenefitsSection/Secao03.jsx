import CircleImageAndTitle from '../CircleImageAndTitle/CircleImageAndTitle';
import css from './Secao03.module.css'

function Secao03() {

	const subtitleImage = [
		{
		  image: "/Images/avatar.png",
		  subtitle: "Autoestima",
		},
		{
		  image: "/Images/natural-mode.png",
		  subtitle: "Bem-estar",
		},
		{
		  image: "../Images/dumbbell.png",
		  subtitle: "Saúde Integral",
		},
		{
		  image: "./Images/every-user.png",
		  subtitle: "Relacionamentos Saudáveis",
		},
		{
		  image: "./Images/crown-three.png",
		  subtitle: "Autoconhecimento",
		},
		{
		  image: "./Images/escalators.png",
		  subtitle: "Resiliência",
		}
	  ]

	return (

		<section>

			<div className={css.containerSec}>

				<div className={css.containerDentro}>
					<div className={css.titleDesc}>
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

export default Secao03;