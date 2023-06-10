import React, { useRef } from "react";
import "./_home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { home } from "../../constants/Constants";
import { Link } from "react-router-dom";
import LoaderWrapper from "../../hoc";
function Home() {
  return (
    <div className="home">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
          clickable: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        className="swiper"
      >
        {home.map((home, i) => (
          <SwiperSlide key={i} className="slide">
            <div className="main">
              <img src={home.img} alt="" />
              <div className="right"></div>
              <div className="footer"></div>
            </div>
            <div className="top">
              <div className="width">
                <div className="type">
                  <span className="w"></span>
                  <span className="p">{home.type}</span>
                </div>
                <h1 className="h1">{home.title}</h1>
                <p className="d">{home.desc}</p>
                <div className="btn">
                  <Link to="/contact">
                    <button className="button">let's discuss</button>
                  </Link>
                  <Link to="/work"> all portfolio</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="progress">
        <div className="width">
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="nav">
        <div className="wid">
          <div className="col">
            <p>SLIDER NAVIGATION</p>
            <div className="flex">
              <div className="custom-prev">
                <FaArrowLeft />
              </div>
              <div className="custom-next">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoaderWrapper(Home, "");
