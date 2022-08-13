import React from 'react';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Virtual } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { lowImg } from '../../Api/getImg';

import { Link } from 'react-router-dom';
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "./SwiperList.scss";
import {FaRegPlayCircle } from 'react-icons/fa';

SwiperList.propTypes = {
    
};
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade]);

function SwiperList({data}) {
    return (
        <React.Fragment>
            <div className="padding" style={{padding: '0 30px'}}>
                <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",}}
                    id="swiper"
                    slidesPerView={6}
                    spaceBetween={0}
                    slidesPerGroup={5}
                    navigation
                >
                    {data.map((data) => {
                    return(
                    <SwiperSlide key={data.id}>
                    <div className="slide" data-aos="fade-up">
                        <Link to={`/movie?id=${data.id}`}>
                            <div className='movie-item'>
                                <img src={lowImg(data.poster_path)} alt="Poster" className='swiper__item-img' />
                                <p className='swiper__item-title'>{data.title}</p>
                                <div className='ibm-score' >{data.vote_average}</div>
                                <div className="play-btn">
                                    <FaRegPlayCircle/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    </SwiperSlide>
                    )})}
                </Swiper>
            </div>
        </React.Fragment>
    );
}

export default SwiperList;