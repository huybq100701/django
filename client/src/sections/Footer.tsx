import React, { useState } from "react";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
// import { footerVideo } from "../data/video";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      
      <div className="footer__container__bottom">
        <div className="footer__container__bottom1">
          <span>JEWELRY SHOP</span>

          <img src={process.env.PUBLIC_URL + "/Logo/logochplay.png"} alt="" />
        </div>
        <div className="footer__container__bottom2">
          <Link to="/" className="btn">
            ABOUT LEAGUE OF LEGENDS
          </Link>
          <Link to="/" className="btn">
            HELP US IMPROVE
          </Link>
          <Link to="/" className="btn">
            SERVER STATUS
          </Link>
          <Link to="/" className="btn">
            SUPPORTS
          </Link>
          <Link to="/" className="btn">
            ESPORTS PRO SITE
          </Link>
          <Link to="/" className="btn">
            DOWNLOAD RIOT MOBILE COMPANION APP
          </Link>
        </div>
        <div className="footer__container__bottom3">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/Logo/logo2.png"} alt="" />
          </div>
          <div className="actor">
            JewelShop
          </div>
   
        </div>
      </div>
    </div>
  );
}

export default Footer;
