import React, { useEffect, useState, useRef } from "react";
import "./Movies.css";
import { useNavigate, useParams } from "react-router-dom";

const Movies = ({ data, heading }) => {
  const [itemsToShow, setItemsToShow] = useState(3); // Default value
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState({ yes: false, id: null });
  const [zIndexProperty, setZIndexProperty] = useState({ id: null, value: 2 });
  const navigate = useNavigate();
  const [marginLeftOnOrOff, setMarginLeftOnOrOff] = useState(false); // Default
  // const extractYouTubeId = (url) => {
  //   const urlParams = new URLSearchParams(new URL(url).search);
  //   return urlParams.get("v"); // Extracting 'v' parameter for YouTube video ID
  // };
  // KEY: 4b90509a0a62bb1b0353
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
          marginBottom: "4.6px",
        }}
      >
        {heading}
        &nbsp; &nbsp; &nbsp;{" "}
        <span
          style={{ fontWeight: "700", fontSize: "18.6px", cursor: "pointer" }}
          onClick={() => {
            navigate(`/browse-more/${heading.split(" ")[0]}`);
          }}
        >
          See more &gt;
        </span>
      </h5>

      <div style={{ position: "relative" }}>
        {!mobileCheck() && (
          <button
            className="next-prev-btn"
            onClick={() => {
              handlePrev();
              // alert("hey");
            }}
            style={{
              position: "absolute",
              zIndex: 20,
              left: "20px",
              // top: "50px",
              outline: "none",
              border: "none",
              color: "black",
              background: "rgba(0,0,0,0.6)",
              height: "100%",
              color: "white",
              // fontSize: "24px",
              cursor: "pointer",
            }}
          >
            <span>&lt;</span>
          </button>
        )}
        {!mobileCheck() && (
          <button
            className="next-prev-btn"
            onClick={() => {
              handleNext();
              // alert("hey");
            }}
            style={{
              position: "absolute",
              zIndex: 20,
              right: "20px",
              // top: "50px",
              outline: "none",
              border: "none",
              color: "black",
              background: "rgba(0,0,0,0.6)",
              height: "100%",
              color: "white",
              // fontSize: "24px",
              cursor: "pointer",
            }}
          >
            <span>&gt;</span>
          </button>
        )}
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
          {data &&
            data.map((ele, id) => {
              return (
                <>
                  {" "}
                  {/* heading != "Animation Movies" && id != 0 &&  */}
                  {
                    <div
                      key={id}
                      className="movie-card"
                      style={{
                        zIndex:
                          zIndexProperty.id === id ? zIndexProperty.value : 2,
                        flexShrink: 0,
                        transformOrigin:
                          id === 0 ? "left center" : "center center",
                      }}
                      onMouseEnter={() => {
                        // setIsHovered({ id: id, yes: true });
                        setZIndexProperty({ id: id, value: 10 });
                      }}
                      onMouseLeave={() => {
                        // setIsHovered({ yes: false });
                        setZIndexProperty({ id: null, value: 2 });
                      }}
                    >
                      <img
                        onClick={() => {
                          navigate(`/movie/${id}`);
                          localStorage.removeItem("movieCategory");
                          localStorage.setItem(
                            "movieData",
                            JSON.stringify(ele)
                          );
                          localStorage.setItem("movieId", id);
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        // src={`${
                        //   ele.Cover
                        //     ? ele.cover
                        //     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsm4mJqn_kXFCHwwjOwr5lPBe0kpOZy09Xp0HXGWjEgJV_DZ34lPYzGg&s=10"
                        // }`}
                        src={ele.Cover}
                        alt={ele.Title}
                      />
                      {isHovered.yes &&
                        !mobileCheck() &&
                        isHovered.id === id && (
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
                  }
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
