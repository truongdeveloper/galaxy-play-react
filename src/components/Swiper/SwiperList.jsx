import React from 'react';
import { Container } from '../../styles/GlobleStyles';
import { Swiper, SwiperSlide } from "swiper/react";
import { lowImg } from '../../Api/getImg';
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual, EffectFade } from "swiper/core";

import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "./SwiperList.scss"
import { Link } from 'react-router-dom';
SwiperList.propTypes = {
    
};
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade]);

function SwiperList({data}) {
    return (
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",}}
                id="swiper"
                slidesPerView={5}
                spaceBetween={0}
                slidesPerGroup={5}
                navigation
            >
                {data.map((data) => {
                  return(
                  <SwiperSlide key={data.id}>
                  <div className="slide">
                    <Link to={`/movie/${data.id}`}>
                        <div className='movie-item'>
                            <img src={lowImg(data.poster_path)} alt="Poster" className='swiper__item-img' />
                            <p className='swiper__item-title'>{data.title}</p>
                            <div className='ibm-score' >{data.vote_average}</div>
                        </div>
                    </Link>
                  </div>
                </SwiperSlide>
                )})}
            </Swiper>
    );
}

export default SwiperList;