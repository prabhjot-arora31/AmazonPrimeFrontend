import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import "./MainHeader.css";
const MainHeader = () => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const handleClickOutside = (event) => {
    console.log("happened");
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsProfileClicked(false); // Hide the button
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="main-header2"
      style={{
        // marginTop: "2px",
        position: "relative",
        top: "-20px",
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Header />
      <div>
        <div
          style={{
            padding: "0.5rem",
            border: "1px solid white",
            width: "30px",
            height: "30px",
            display: `${isProfileClicked ? "none" : "flex"}`,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsProfileClicked(true);
          }}
        >
          <i class="fa-regular fa-user"></i>
        </div>
        <div
          ref={buttonRef}
          style={{
            display: `${isProfileClicked ? "flex" : "none"}`,
            flexDirection: "column",
            color: "white",
            border: "1px solid white",
            padding: "0.5rem",
            borderRadius: "0.6rem",
          }}
        >
          <h3>Your account</h3>
          <button
            style={{
              marginLeft: "20px",
              marginRight: "20px",
            }}
            onClick={() => {
              localStorage.removeItem("movieData");
              localStorage.removeItem("movieId");
              localStorage.removeItem("name");
              localStorage.removeItem("id");
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
