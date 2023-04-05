import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ShopBanner from "../sections/shopBanner/ShopBanner";
import FeaturedProducts from "../sections/featuredProducts/featuredProducts";
import SwiperProduct from "../sections/swiperProduct/SwiperProduct";

const Shop = () => {
  return (
    <div className="shop">
      <Header />
      <ShopBanner />
      <FeaturedProducts />
      <SwiperProduct />
      <Footer />
    </div>
  );
};

export default Shop;
