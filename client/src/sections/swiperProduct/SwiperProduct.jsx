import Swiper from "swiper";
import "swiper/swiper.min.css";
import "../../styles/sections/swiperProduct/SwiperProduct.scss";
import React, { useEffect, useRef } from "react";
import ButtonShop from "../../components/button/ButtonShop";
const SwiperProduct = () => {
  const swiperRef = useRef(null);
  let swiper;

  useEffect(() => {
    if (swiperRef.current) {
      swiper = new Swiper(swiperRef.current, {
        // Add your options here
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper">
      <p>BEST SELLER</p>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className="img1"
              src="https://i.pinimg.com/564x/65/c0/cb/65c0cb21de4201bff346046a0ed87645.jpg?fbclid=IwAR0TdbYv7r_iJ1uxa7ApyKplf2d-jBRXWZx2MezJA3xp-xFB8T4FEuM3Xqw"
              alt="1"
            />
            <ButtonShop name={"Necklace"} />
          </div>
          <div className="swiper-slide">
            <img
              className="img1"
              src=" https://i.pinimg.com/564x/58/ea/57/58ea57837fada4274fb2225272c319ee.jpg?fbclid=IwAR378FqMm7OQTM1PRrjWpf_c6MwBC41lU2dLyHeHwCjjPqX9U1x8V8B63CU"
              alt=""
            />
            <ButtonShop name={"Necklace"} />
          </div>
          <div className="swiper-slide">
            <img
              className="img1"
              src=" https://i.pinimg.com/564x/58/ea/57/58ea57837fada4274fb2225272c319ee.jpg?fbclid=IwAR378FqMm7OQTM1PRrjWpf_c6MwBC41lU2dLyHeHwCjjPqX9U1x8V8B63CU"
              alt=""
            />
            <ButtonShop name={"Necklace"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperProduct;
