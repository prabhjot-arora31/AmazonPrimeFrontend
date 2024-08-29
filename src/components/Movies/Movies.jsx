import React, { useEffect, useState, useRef } from "react";
import "./Movies.css";
import { useNavigate } from "react-router-dom";

const Movies = ({ data, heading }) => {
  const [itemsToShow, setItemsToShow] = useState(3); // Default value
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState({ yes: false, id: null });
  const [zIndexProperty, setZIndexProperty] = useState({ id: null, value: 2 });
  const navigate = useNavigate();
  const [marginLeftOnOrOff, setMarginLeftOnOrOff] = useState(false); // Default
  const extractYouTubeId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v"); // Extracting 'v' parameter for YouTube video ID
  };

  const mobileCheck = () => {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/.test(
      navigator.userAgent
    );
  };
  useEffect(() => {
    console.log(containerRef);

    return () => {};
  }, []);

  const handleNext = () => {
    setMarginLeftOnOrOff(true);
    if (containerRef.current) {
      console.log(containerRef.current);
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / itemsToShow,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setMarginLeftOnOrOff(false);
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / itemsToShow,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <h5
        style={{
          textAlign: "left",
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          marginLeft: "1rem",
        }}
      >
        {heading}
      </h5>

      {mobileCheck() == false && (
        <div style={{ position: "relative" }}>
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              zIndex: 20,
              left: "20px",
              top: "50px",
              outline: "none",
              border: "none",
              color: "black",
              // fontSize: "24px",
              cursor: "pointer",
            }}
          >
            &lt;
          </button>
          <button
            onClick={() => {
              handleNext();
              // alert("hey");
            }}
            style={{
              position: "absolute",
              zIndex: 20,
              right: "20px",
              top: "50px",
              outline: "none",
              border: "none",
              color: "black",
              // fontSize: "24px",
              cursor: "pointer",
            }}
          >
            &gt;
          </button>
          <div
            ref={containerRef}
            style={{
              // marginTop: "0.7rem",
              display: "flex",
              flexWrap: "nowrap",
              marginLeft: `${marginLeftOnOrOff == false ? "1.1rem" : 0}`,
              // marginRight: "3.4rem",
              gap: "0.7rem",
              overflowX: "scroll",
              // marginBottom: `${isHovered.yes ? "4.5rem" : "1.6rem"}`,
            }}
          >
            {data.map((ele, id) => {
              return (
                <div
                  key={id}
                  className="movie-card"
                  style={{
                    zIndex: zIndexProperty.id === id ? zIndexProperty.value : 2,
                    flexShrink: 0,
                    transformOrigin: id === 0 ? "left center" : "center center",
                  }}
                  onMouseEnter={() => {
                    setIsHovered({ id: id, yes: true });
                    setZIndexProperty({ id: id, value: 10 });
                  }}
                  onMouseLeave={() => {
                    setIsHovered({ yes: false });
                    setZIndexProperty({ id: null, value: 2 });
                  }}
                >
                  <img
                    onClick={() => {
                      navigate(`/movie/${id}`);
                      localStorage.setItem("movieData", JSON.stringify(ele));
                      localStorage.setItem("movieId", id);
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    src={ele.Cover}
                    alt={ele.Title}
                  />
                  {isHovered.yes && !mobileCheck() && isHovered.id === id && (
                    <div
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        padding: "0.7rem",
                        display: "flex",
                        position: "relative",
                        top: "-7px",
                        justifyContent: "start",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <h6 style={{ textAlign: "left" }}>{ele.Title}</h6>
                      <div className="movie-div-buttons">
                        <button
                          onClick={() => {
                            navigate(
                              `/trailer/${extractYouTubeId(ele.Trailer)}`
                            );
                          }}
                        >
                          <i
                            className="fa-solid fa-play"
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
                            ? `1 hr ${60 - Number(ele.Duration)} min`
                            : ele.Duration}
                        </p>
                      </div>
                      <div className="desc">
                        <p>
                          {ele.Description.length > 90
                            ? `${ele.Description.substr(0, 120)}...`
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
      )}
    </div>
  );
};

export default Movies;
