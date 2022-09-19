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
import { isMobile } from 'react-device-detect';
import {errorImg} from '../../assets/error-404-with-the-cute-french-fries-mascot-free-vector.jpg'

SwiperList.propTypes = {
    
};
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade]);

function SwiperList({data}) {

    
    return (
        <React.Fragment>
            <div className="padding">
                <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",}}
                    id="swiper"
                    slidesPerView={isMobile? 2 : 6}
                    spaceBetween={0}
                    slidesPerGroup={isMobile? 2 : 5}
                    navigation
                >
                    {data.map((data) => {
                    return(
                    <SwiperSlide key={data.id}>
                    <div className="slide" data-aos="fade-up">
                        <Link to={`/movie?id=${data.id}`}>
                            <div className='movie-item'>
                                <img src={lowImg(data.poster_path)} onError={(e) => {e.target.onerror = null ; e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/003/393/218/small_2x/error-404-with-the-cute-french-fries-mascot-free-vector.jpg'}} className='swiper__item-img' />
                                <p className='swiper__item-title'>{data.title}</p>
                                <div className='ibm-score' >{Math.floor(data.vote_average)}</div>
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