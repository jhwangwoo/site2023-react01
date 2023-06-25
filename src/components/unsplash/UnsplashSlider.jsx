import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-flip";
import "swiper/css/bundle";

const UnsplashImg = ({ image }) => {
  return (
    <a href={`https://unsplash.com/photos/${image.id}`} target="_blank">
      <img src={image.urls.regular} alt={image.alt_description} />
    </a>
  );
};

const UnsplashSlider = ({ images }) => {
  return (
    <section className="unsplash__slider">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFlip, Pagination, Autoplay]}
        className="mySwiper"
        wrapperProps={{ style: { width: "300px", height: "100px" } }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <UnsplashImg image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UnsplashSlider;
