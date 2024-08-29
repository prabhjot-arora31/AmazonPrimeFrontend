import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [verticalMenuOpened, setVerticalMenuOpened] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2.4rem",
        marginTop: 0,
      }}
    >
      <img
        className="primeLogo"
        style={{ marginRight: "1.2rem" }}
        width={`130px`}
        src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png"
        alt=""
      />
      <div className="menu">
        <h3
          className="header-text"
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </h3>
        <h3 className="header-text">Movies</h3>
        <h3 className="header-text">TV Shows</h3>
        <h3 className="header-text">Live TV</h3>
      </div>
      {verticalMenuOpened && (
        <div
          // className="vertical-menu"
          style={{ border: "1px solid white", padding: "0.4rem", display:'flex',
                 flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:'5px',
                  gap:'4px'
                 }}
        >
          <button
            className="m-opener"
            style={{ color: "black", 
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'40%',
                   width:'33px',
                    height:'33px'
                   }}
            onClick={() => {
              setVerticalMenuOpened(false);
            }}
          >
            X
          </button>
          <div>
            <h3
              className="header-text"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </h3>
            <h3 className="header-text">Movies</h3>
            <h3 className="header-text">TV Shows</h3>
            <h3 className="header-text">Live TV</h3>
          </div>
        </div>
      )}
      <div className="menuOpener" onClick={() => {}}>
        {/* <p></p>
        
        <p></p>
        <p></p> */}
        {!verticalMenuOpened && (
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "black",
              color: "white",
              fontSize: "20px",
            }}
            onClick={() => {
              setVerticalMenuOpened(true);
            }}
          >
            Menu
          </button>
        )}
      </div>
      <div
        className="subs"
        style={{ height: "1.4rem", width: "2px", backgroundColor: "gray" }}
      ></div>
      <h3 className="header-text subs">Subscriptions</h3>
    </div>
  );
};

export default Header;
