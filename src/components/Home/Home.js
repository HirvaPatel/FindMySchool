import React from "react";
import Carousel from "./Carousel";
import OurServices from "./OurServices";
import Chatbot from "../Chatbot/Chatbot";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Chatbot />
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
