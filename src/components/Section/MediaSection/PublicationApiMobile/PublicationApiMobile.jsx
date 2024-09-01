import css from './PublicationApiMobile.module.css'
import api from '../../../../service/api.js'

import { useState, useEffect } from 'react';
import CardPublication from '../CardPublication/CardPublication.jsx';

import { register } from 'swiper/element/bundle'

register();

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react';

function PublicationApiMobile() {

	const [pulications, setPublications] = useState([])

	async function getData() {

        await api.get('/Postagem/pagged?page=1&quantity=12&tipoPostagem=Psico')
            .then((response) => {
                setPublications(response.data.object);
            }).catch(
                err => console.error(err)
            );
    }

	useEffect(() => {
        getData();
    }, []);

	return (
		<div className={css.allPulicationsMobile}>
			<Swiper
				
				slidesPerView={1}
				pagination={{ clickable: true }}
				navigation
			>
				{
					pulications.map((item, index) => (
						<SwiperSlide key={index}>
							<CardPublication
								link={item.link}
								image={item.capa}
								title={item.titulo}
								description={item.descricao}
							/>
						</SwiperSlide>
		 			))
				}
			</Swiper>
		</div>

		// <div className={css.allPulications}>
		// 	{
		// 		pulications.map((item, index) => (
		// 			<CardPublication
		// 				key={index}
		// 				link={item.link}
		// 				image={item.capa}
		// 				title={item.titulo}
		// 				description={item.descricao}
		// 			/>
		// 		))
		// 	}
		// </div>
	);
}

export default PublicationApiMobile;