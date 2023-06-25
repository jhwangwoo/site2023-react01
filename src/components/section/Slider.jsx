import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";
const Slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="silder__inner container">
        <h2 className="blind">배너 슬라이더</h2>
        <div className="slider__img">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    science <br />
                    Technology
                  </h3>
                  <p>
                    과학은 어떤 것이든 진실을 찾고
                    <br /> 이해하기 위해 끊임없이 탐구하는 모험입니다.
                  </p>
                  <Link to="/" className="more button-red">
                    더 알아보기
                  </Link>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/slidericon01.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/slidericon02.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/slidericon03.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s2 container">
                <div className="text">
                  <h3>
                    science <br />
                    Technology
                  </h3>
                  <p>
                    과학은 어떤 것이든 진실을 찾고
                    <br /> 이해하기 위해 끊임없이 탐구하는 모험입니다.
                  </p>
                  <Link to="/" className="more button-red">
                    더 알아보기
                  </Link>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/slidericon01.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/slidericon02.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/slidericon03.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s3 container">
                <div className="text">
                  <h3>
                    science <br />
                    Technology
                  </h3>
                  <p>
                    과학은 어떤 것이든 진실을 찾고
                    <br /> 이해하기 위해 끊임없이 탐구하는 모험입니다.
                  </p>
                  <Link to="/" className="more button-red">
                    더 알아보기
                  </Link>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/slidericon01.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/slidericon02.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/slidericon03.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    // <div className="slider__btn">
    //     <Link to="/" className="left">
    //         <span className="ir">이전이미지</span>
    //     </Link>
    //     <Link to="/" className="right">
    //         <span className="ir">다음이미지</span>
    //     </Link>
    // </div>
    // <div className="slider__dot">
    //     <Link to="/" className="dot active">
    //         <span className="ir">1번이미지</span>
    //     </Link>
    //     <Link to="/" className="dot">
    //         <span className="ir">2번이미지</span>
    //     </Link>
    //     <Link to="/" className="dot">
    //         <span className="ir">3번이미지</span>
    //     </Link>
    // </div>
  );
};

export default Slider;
