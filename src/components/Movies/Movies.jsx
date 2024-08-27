import React, { useState } from "react";
import "./Movies.css";
import { useNavigate } from "react-router-dom";
const Movies = ({ data, history }) => {
  const [moveHoverData, setMoveHoverData] = useState({});
  const [isHovered, setIsHovered] = useState({ yes: false, id: null });
  const [zIndexProperty, setZIndexProperty] = useState({ id: null, value: 2 });
  const navigate = useNavigate();
  const extractYouTubeId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v"); // Extracting 'v' parameter for YouTube video ID
  };
  return (
    <div>
      <h2
        className="text-white"
        style={{
          textAlign: "center",
          fontSize: "37px",
          marginBottom: "36px",
          fontWeight: "semi-bold",
        }}
      >
        Movies
      </h2>
      <h5 style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
        Top 10 movies in India
      </h5>
      <div
        style={{
          marginTop: "0.7rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.7rem",
          overflowX: "auto",
          justifyContent: "center",
          marginBottom: `${isHovered.yes ? "4.5rem" : "1.6rem"}`,
        }}
      >
        {/* {data.map((ele, id) => {
          return (
            <div
              onMouseEnter={() => {
                setMoveHoverData(ele);
                setIsHovered({ yes: true, id: id });
              }}
              onMouseLeave={() => {
                setIsHovered({ yes: false, id: null });
              }}
              key={id}
              style={{
                display: "flex",
                flexDirection: "column",
                transition: "0.21s ease-in-out",
                zIndex: isHovered.id === id ? 10 : 1, // Bring to front if hovered
                position: "relative", // Ensures child elements are positioned correctly
                transform: `${
                  isHovered && isHovered.id === id ? "scale(1.09)" : "scale(1)"
                }`,
              }}
            >
              <div
                className="inner-div"
                style={{
                  // width: "250px",
                  // height: "150px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  backgroundColor: "black",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={`${ele.Cover}`}
                />
              </div>
              {isHovered.yes && isHovered.id === id && (
                <div
                  onMouseEnter={() => {
                    setMoveHoverData(ele);
                    setIsHovered({ yes: true, id: id });
                  }}
                  style={{
                    marginTop: "0.5rem",
                    width: "235px",
                    maxHeight: "190px",
                    zIndex: 10,
                    color: "white",
                    position: "absolute", // Absolutely position the hover content
                    top: "120px", // Position below the image
                    // left: 0,
                    left: "10px",
                    // backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
                    backgroundColor: "black",
                    padding: "1rem",
                    borderRadius: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      style={{
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <button
                      style={{
                        width: "40px",
                        alignItems: "center",

                        display: "flex",
                        justifyContent: "center",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    >
                      <i
                        class="fa-solid fa-play"
                        style={{ left: "2px", position: "relative" }}
                      ></i>
                    </button>
                  </div>
                  <div>{ele.Title}</div>
                  <div>{ele.Genre}</div>
                  <p style={{ fontSize: "12px" }}>{ele.synopsis_long}</p>
                  <video
                    src={`${ele.Trailer}`}
                    width={"200px"}
                    style={{ margin: 0, position: "relative", top: "-20px" }}
                    height={"200px"}
                    autoPlay
                  />
                </div>
              )}
            </div>
          );
        })} */}
        {data.map((ele, id) => {
          return (
            <div
              className="movie-card"
              style={{
                zIndex: `${zIndexProperty.id == id ? zIndexProperty.value : 2}`,
              }}
              onMouseEnter={() => {
                setIsHovered({ id: id, yes: true });
                setZIndexProperty({ id: id, value: 10 });
              }}
              onMouseLeave={() => {
                setIsHovered({ yes: false });
                setZIndexProperty(2);
              }}
            >
              <img
                onClick={() => {
                  navigate(`/movie/${id}`);
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={ele.Cover}
                alt={ele.Title}
              />
              {isHovered.yes && isHovered.id == id && (
                <div
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "0.7rem",
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ textAlign: "left" }}>{ele.Title}</h6>
                  <div className="movie-div-buttons">
                    <button
                      onClick={() => {
                        // history.push("/trailer");
                        navigate(`/trailer/${extractYouTubeId(ele.Trailer)}`);
                        // /trailer/:trailerId
                      }}
                    >
                      <i
                        class="fa-solid fa-play"
                        style={{
                          position: "relative",
                          left: "-5.7px",
                          top: "-1.4px",
                          fontSize: "20px",
                        }}
                      ></i>
                    </button>
                  </div>
                  <div className="extra-info">
                    <p>{ele.Release}</p>
                    <p>
                      {ele.Duration > 60
                        ? "1 hr" + `${60 - Number(ele.Duration)}` + " min"
                        : ele.Duration}
                    </p>
                  </div>
                  <div className="desc">
                    <p>
                      {ele.Description.length > 90
                        ? ele.Description.substr(0, 120) + "..."
                        : ele.Description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
