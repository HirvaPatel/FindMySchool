import React from "react";
import "./Carousel.css";
import utoronto from "../university_of_toronto.jpg";
import ubc from "../university_of_british_columbia.jpg";
import uwaterloo from "../university_of_waterloo.jpg";

const ubcImg = "https://kunjdata.s3.amazonaws.com/university_of_british_columbia.jpg";
const utorImg = "https://kunjdata.s3.amazonaws.com/university_of_british_columbia.jpg";
const uwtlImg = "https://kunjdata.s3.amazonaws.com/university_of_british_columbia.jpg";


const Carousel = () => {
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
          <div className="carousel-item active">
            {/* https://talloiresnetwork.tufts.edu/wp-content/uploads/UBC-Vancouver.jpg */}
            <img src={ubcImg} alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>University of British Columbia</h1>
                <p></p>
                <p>
                  <a className="btn btn-lg btn-dark" href="#">
                    Curious?
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {/* https://thestrand.ca/wp-content/uploads/2020/10/News-National-Dialogue-and-Action-couresty_of_University_of_Toronto-scaled.jpg */}
            <img src={utorImg} alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>University of Toronto</h1>
                <p></p>
                <p>
                  <a className="btn btn-lg btn-dark" href="#">
                    Curious?
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            {/* https://www.alumicor.com/wp-content/uploads/University-of-Waterloo-2-1700x1275.jpg */}
            <img src={uwtlImg} alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>University of Waterloo</h1>
                <p></p>
                <p>
                  <a className="btn btn-lg btn-dark" href="#">
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
