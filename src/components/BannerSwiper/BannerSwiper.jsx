import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual, EffectFade } from "swiper/core";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { hightImg, lowImg } from "../../Api/getImg";
import "./BannerSwiper.scss";
import { useNavigate } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import { Container } from "../../styles/GlobleStyles";


SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade]);

export default function BannerSwiper({ data }) {

  const navigate = useNavigate()
  
    function handleClick(e) {
      console.log(e.target.id);
      navigate(`/movie?id=${e.target.id}`)
    }

    return (
        <React.Fragment>
          <Container>  
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",}}
                id="swiper"
                virtual
                // effect="fade"
                slidesPerView={1}
                // slidesPerColumn={2}
                // slidesPerColumnFill="row"
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                // slidesPerGroup={2}
                // autoplay
                // loop
                // navigation
                pagination
            >
                {data.map((data) => {
                  return(
                  <SwiperSlide key={data.id} style={{ height: "90%" }}>
                  <div className="content-left">
                      {isMobile?
                      <div className="content-mobile" >
                        <h1>{data.title}</h1>
                        <div className="btn__1" id={data.id} onClick={handleClick}>
                          Xem ngay
                        </div>
                      </div>
                      :
                      <div className="content">
                        <h1>{data.title}</h1>
                        <p>Release: {data.release_date}</p>
                        <p className="overview">{data.overview}</p>
                        <div className="btn__1" id={data.id} onClick={handleClick}>
                          Xem ngay
                        </div>
                      </div>
                      }
                  </div>
                  {isMobile?
                    null
                    :
                    <div className="shadow"></div>
                  }
                  <div className="slide">
                    {isMobile?
                      <img src={lowImg(data.poster_path)} alt="Poster" className='swiper__item-img' />
                    :
                      <img src={hightImg(data.backdrop_path)} alt="" style={{ width: "90%", float: "right" }} />
                    }
                  </div>
                </SwiperSlide>
                )})}
            </Swiper>

          </Container>

        </React.Fragment>
    );
}
