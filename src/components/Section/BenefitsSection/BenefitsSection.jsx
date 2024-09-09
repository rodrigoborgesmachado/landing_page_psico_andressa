
import Title from '../../Common/Title';
import css from './BenefitsSection.module.css'
import CircleImageAndTitle from './CircleImageAndTitle/CircleImageAndTitle';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import '../BenefitsSection/benefitsStyle.css'

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
		  image: "/icons/dumbbell.png",
		  subtitle: "Saúde Integral",
		},
		{
		  image: "/icons/every-user.png",
		  subtitle: "Relacionamentos Saudáveis",
		},
		{
		  image: "/icons/crown-three.png",
		  subtitle: "Autoconhecimento",
		},
		{
		  image: "/icons/escalators.png",
		  subtitle: "Resiliência",
		}
	]

	const containerIcons = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
		  opacity: 1,
		  scale: 1,
		  transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2
		  }
		}
	};
	  
	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
		  y: 0,
		  opacity: 1
		},
		transition: {
			duration: 0.5 
		}
	};

	
	const { ref, inView } = useInView({
	  triggerOnce: false, 
	  threshold: 0.2,
	});
	

	return (
		<section className={css.benefitsSection}>
			<div >
				<div>
					<div>
						<Title title={'Como a Terapia Ajuda'} style={'titleBenefitsSection'}/>
						<p>O processo terapêutico permite explorar e compreender melhor seus pensamentos e comportamentos, desenvolvendo estratégias eficazes para enfrentar desafios.</p>
						<p>Você terá um espaço seguro para expressar suas preocupações e melhorar a qualidade de seus relacionamentos, resultando em uma vida mais equilibrada e satisfatória.</p>
					</div>
				</div>
				<div>
					<div ref={ref} className={css.boxesGroupIcons}>
						<motion.ul
							className={css.boxesGroupIcons}
							variants={containerIcons}
							initial="hidden"
							animate={inView ? "visible" : "hidden"} 
				  		>
							{subtitleImage.map((item, index) => (
  								<motion.li 
  								  key={index} 
  								  className={`${css.boxesGroupIcons} items`} 
  								  variants={itemVariants} 
  								>
  								  <CircleImageAndTitle
								  	key={index}
  								    image={item.image}
  								    title={item.subtitle}
  								  />
  								</motion.li>
							))}
						</motion.ul>
					</div>
						{/* <div className={css.boxesGroupIcons}>
							{subtitleImage.map((item, index) => (
								<CircleImageAndTitle
									key={index} 
									image={item.image}
									title={item.subtitle}
								/>
							))}
						</div> */}
				</div>
			</div>	
			<div className={css.libelulaBenefits}>
				<img src="/icons/Layer_1-2.png" alt="libelula" />
			</div>	
		</section>
	);
}

export default BenefitsSection;