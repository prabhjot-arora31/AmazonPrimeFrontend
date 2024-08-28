import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import categoryIcon from "../assets/dots.png";
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
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="icons">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icons">
          <i className="fa fa-th" style={{ fontSize: "1.2rem" }}></i>
        </div>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("id");
              navigate("/");
            }}
            style={{
              // border: "1px solid gray",
              backgroundColor: "red",
              // padding: "0rem",
              padding: "0.4rem",
              // fontSize: "20px",
            }}
          >
            Sign out
          </button>
        </div>
        {/* <div
          className="icons"
          style={{
            border: "1px solid gray",
            backgroundColor: "#19759A",
            // padding: "0rem",
            padding: 0,
            fontSize: "20px",
          }}
        >
          <i className="fa-solid fa-user"></i>
        </div> */}
        <button className="jp"> Join Prime</button>
        {/* <button
          onClick={() => {
            navigate(`/login`);
            localStorage.removeItem("token");
            localStorage.removeItem("id");
          }}
          style={{
            backgroundColor: "red",
            color: "white",
            marginRight: "1.2rem",
          }}
        >
          Logout
        </button>
        <br />
        <br />
        <button
          style={{ border: "1px solid black" }}
          onClick={() => {
            navigate(`/user/${localStorage.getItem("id")}/profile`);
          }}
        >
          Profile
        </button> */}
      </div>
    </div>
  );
};

export default MainHeader;
