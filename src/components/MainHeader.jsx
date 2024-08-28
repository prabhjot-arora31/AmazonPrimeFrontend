import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import "./MainHeader.css";
const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "relative",
        top: "-20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.2rem",
      }}
    >
      <Header />
      <button
        style={{ marginLeft: "20px", marginRight: "20px" }}
        onClick={() => {
       //   localStorage.removeItem("movieData");
         // localStorage.removeItem("movieId");
         // localStorage.removeItem("name");
        //  localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default MainHeader;
