import React, {useEffect, useState} from 'react';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomeContent from "./HomeContent";
import styles from "./HomeSection.module.css";

function HomeSection() {
    const [isVisible, setIsVisible] = useState(true);

    const images = [
        'Home_Terapia.svg',
        'Home_SeAbrace.svg',
        'Home_MulherEBorboletas.svg'
    ];

    // Função para detectar quando o usuário está na última seção
    useEffect(() => {
        const handleScroll = () => {
            const lastSection = document.getElementById('last-section');
            const bottomOfLastSection = lastSection?.getBoundingClientRect().top < window.innerHeight;

            // Se estiver na última seção, esconde a seta
            setIsVisible(!bottomOfLastSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.homeSection} id={"home"}>
            <div>
                <HomeContent/>
            </div>
            {isVisible && (
                <img
                    src="/icons/Seta_paraBaixo.png"
                    alt="Seta para baixo"
                    className={styles.arrowIcon} // Classe específica para o ícone
                />
            )}
            <span className={styles.carousel}>
              <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  swipeable={false}
                  interval={6000}
                  transitionTime={800}
                  animationHandler="fade"
                  showIndicators={false}
                  stopOnHover={false}
                  dynamicHeight={false}
                  emulateTouch={false}
              >

                {images.map((image, index) => (
                    <>
                        <div key={index} style={{height: '100vh'}} className={styles.carouselDesktop}>
                            <img
                                src={`/images/${image}`}
                                alt={`Slide ${index + 1}`}
                                style={{objectFit: 'cover', height: '100%', width: '100%'}}
                            />
                        </div>
                        <div key={index + images.length} style={{height: '100vh'}} className={styles.carouselMobile}>
                            <img
                                src={`/images/Mobile_${image}`}
                                alt={`Slide ${index + 1}`}
                                style={{objectFit: 'cover', height: '100%', width: '100%'}}
                            />
                        </div>
                    </>
                ))}
            </Carousel>
            </span>
        </section>
    );
}

export default HomeSection;
