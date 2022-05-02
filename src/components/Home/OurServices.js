import React from "react";
import "./OurServices.css";
import { Button, Card } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();
  const renderAdvice = () => {
    navigate(`/advising`);
  };
  return (
    <div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Find the best fit University</h2>
            <p className="lead">
              Tell us your interest and career goals and we will recommend you
              the most appropritate University programs.
            </p>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <Card variant="outlined" style={{ margin: "5%" }}>
              <Button
                variant="contained"
                color="success"
                style={{ margin: "10%", height: "50px" }}
                endIcon={<SendIcon />}
                onClick={renderAdvice}
              >
                Want some Personal Advice?
              </Button>
            </Card>
          </div>
        </div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Connect with the current students</h2>
            <p className="lead">
              Connect and ask your concerns about the Universties and the
              programs to the enrolled students who knows best.
            </p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
