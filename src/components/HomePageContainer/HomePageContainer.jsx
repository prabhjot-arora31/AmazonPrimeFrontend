import React from "react";
import "./HomePageContainer.css";
import { useNavigate } from "react-router-dom";
const HomePageContainer = ({ heading, image, supportingText, buttonText }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        color: "white",
        textAlign: "left",
        display: "flex",
        paddingLeft: "1.7rem",
        paddingRight: "0.7rem",
        paddingBottom: "2.5rem",
      }}
      className="m-div"
    >
      <div>
        {" "}
        <h2 style={{ fontSize: "34px", fontWeight: "600", margin: 0 }}>
          {heading}
        </h2>{" "}
        <h3 style={{ fontWeight: "500", fontSize: "23px", margin: 0 }}>
          {supportingText}
        </h3>
        {/* <button
          onClick={() => {
            heading == "Welcome to Prime Video" && navigate("/login");
          }}
          style={{
            marginTop: "40px",
            width: "250px",
            backgroundColor: "#0F79AF",
            color: "#FFFFFF",
            fontSize: "17.7px",
            fontWeight: "500px",
          }}
        >
          {buttonText}
        </button> */}
      </div>
      <div className="img-container">
        <img src={image} alt="" width={"100%"} />
      </div>
    </div>
  );
};

export default HomePageContainer;
