import React from "react";
import { useNavigate } from "react-router-dom";

const UniversityCard = ({ university }) => {
  const navigate = useNavigate();
  const handleView = () => {
    const uniId = university.university_id;
    navigate(`/university/${uniId}`);
  };

  return (
    <div>
      <div style={{ margin: "5%" }} className="col">
        <div className="card shadow-sm">
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src={university.uni_img}
            alt=""
          />

          <div className="card-body">
            <p className="card-text">{university.name}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p>
                {/* {university.location.city},{university.location.country} */}
              </p>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleView()}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
