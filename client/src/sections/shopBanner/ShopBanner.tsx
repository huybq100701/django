import React from "react";
import "../../styles/sections/shopBanner/shopBanner.scss";
import ButtonShop from "../../components/button/ButtonShop";
const ShopBanner = () => {
  return (
    <div className="shopBanner">
      <div className="shopBanner__image-container">
        <img
          src="https://i.pinimg.com/564x/65/c0/cb/65c0cb21de4201bff346046a0ed87645.jpg?fbclid=IwAR0TdbYv7r_iJ1uxa7ApyKplf2d-jBRXWZx2MezJA3xp-xFB8T4FEuM3Xqw"
          alt=""
          className="shopBanner__img"
        />
      </div>

      <div className="shopBanner__container">
        <div className="shopBanner__content">
          <div className="shopBanner__content-wrapper">
            <div className="shopBanner__content-text">NEW BRACELET</div>
            
            {/* <canvas width={480} height={164}></canvas> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
