import { React, useState, useEffect } from "react";
import "./Carousel.css";
import axios from "axios";
import ubc from "../../assets/university_of_british_columbia.jpg";
import CarouselUniversity from "./CarouselUniversity";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [universities, setUniversities] = useState({});
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/university/7`);
  };
  const url = `https://codzo5uokf.execute-api.us-east-1.amazonaws.com/dev/universities`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUniversities(response.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {universities
            ? universities.length > 0
              ? universities.map((university) => {
                  return <CarouselUniversity university={university} />;
                })
              : "No results found."
            : "Fetching universities."}
          <div className="carousel-item active">
            <img src={ubc} alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>University of British Columbia</h1>
                <p></p>
                <p>
                  <a className="btn btn-lg btn-dark" onClick={handleView}>
                    Curious?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
