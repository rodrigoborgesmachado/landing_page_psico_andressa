import styles from './RetentionSection.module.css';

function RetentionSection() {
	return (
		<section className={styles.retentionSection}>
			<div>
				<h1>Descubra Seu Potencial!</h1>
				<p>
					<span className={styles.firstLine}>
						Você pode descobrir sua essência e desenvolver seu potencial reconstruindo sua autoestima.
					</span>
					<br />
					Aprenda a se comunicar de forma assertiva, trabalhe conflitos internos e em seus relacionamentos, e encontre mais sentido e qualidade de vida. O processo terapêutico oferece um espaço acolhedor e seguro para você se conhecer melhor e crescer. Vamos começar essa jornada juntas?
				</p>
				<form action="">
					<input type="button" value="Entre em contato por e-mail" />
				</form>
				<div className={`${styles.flower} ${styles['flower-bottom-left']}`}></div>
				<div className={`${styles.flower} ${styles['flower-top-right']}`}></div>
			</div>
		</section>
	);
}

export default RetentionSection;
