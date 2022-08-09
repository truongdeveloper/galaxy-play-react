import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
  EffectFade
} from "swiper/core";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"
import { hightImg } from "../../Api/getImg";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade]);

export default function BannerSwiper({data}) {

    console.log(data)
    const slides = [];
    for (let i in data) {
        slides.push(
        <SwiperSlide key={data[i].id} style={{height: "50%"} }>
            <div className="slides">
                <img src={hightImg(data[i].backdrop_path)} alt="" style={{width: '90%', float: 'right'}} />
            </div>
        </SwiperSlide>
        );
    }

  return (
    <Swiper
      id="swiper"
      virtual
      // effect="fade"
      // slidesPerView={3}
      // slidesPerColumn={2}
      slidesPerColumnFill="row"
      spaceBetween={30}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      // slidesPerGroup={2}
      // autoplay
      // loop
      onReachEnd={() => {
        console.log("reach end");
        // const tmp = slides.unshift();
        // slides.push(tmp);
      }}
      navigation
      pagination
    >
      {slides}
    </Swiper>
  );
}
