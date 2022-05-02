import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CarouselUniversity = ({ university }) => {
  const navigate = useNavigate();
  const handleView = () => {
    const uniId = university.university_id;
    navigate(`/university/${uniId}`);
  };

  return (
    <div className="carousel-item">
      <img src={university.uni_img} alt="" />
      <div className="container">
        <div className="carousel-caption text-start">
          <h1>{university.name}</h1>
          <p>
            <a className="btn btn-lg btn-dark" onClick={handleView}>
              Curious?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselUniversity;
