import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <OurServices></OurServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
