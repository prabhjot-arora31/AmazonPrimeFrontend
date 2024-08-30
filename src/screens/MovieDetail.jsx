import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import MainHeader from "../components/MainHeader";
import "./MovieDetail.css";
const MovieDetail = () => {
  const { id, genre } = useParams();
  const movie = useSelector((state) => {
    return state.movie;
  });
  const { data } = movie;
  const [filteredData, setFilteredData] = useState({ Genre: "" });

  // const filteredData = data.filter((rData, fId) => fId == id && rData)[0];
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(filteredData);
    console.log("PARAMS ARE:", id, " ", genre);
    console.log("image bg:", filteredData.Cover && filteredData.Cover);
    if (genre) {
      try {
        import(`../data/${genre.toLowerCase()}_movies.json`).then((data) => {
          // console.log(data.default.result.data);
          data.default.result.data.map((movie) => {
            console.log(typeof movie.movieId);
            console.log(typeof id);
          });
          const d = data.default.result.data.filter((movie) => {
            return parseInt(movie.movieId) == parseInt(id) && movie;
          });
          console.log("d is:", d);
          setFilteredData(d[0]);
        });
      } catch (err) {
        console.log(err.message);
      }
      // filteredData = {};
      console.log("genre is there");
    } else {
      console.log("genre is not there");
      console.log(JSON.parse(localStorage.getItem("movieData")));
      setFilteredData(JSON.parse(localStorage.getItem("movieData")));
    }
    return () => {};
  }, []);
  // var filteredData;

  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingTop: "7px" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "1.2rem",
          backgroundImage:
            "linear-gradient(to top,rgba(0,0,0,0.3),rgba(0,0,0,0.7)",
        }}
      >
        <MainHeader />
      </div>
      <div
        style={{
          // backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 1), rgba(0,0,0,0.5), rgba(0, 0, 0, 0)), url(${filteredData.Cover})`,
          position: "relative",
          //   padding: "1.4rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            marginTop: "10px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image covers the entire area
            }}
            src={filteredData.Cover}
          />

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "30%", // Adjust height to control how much of the image the gradient covers
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",

              opacity: 1, // Adjust opacity for overall darkness
            }}
          ></div>
        </div>

        <div
          className="detail-info"
          style={{ position: "relative", zIndex: 1, marginLeft: "12px", marginTop:'-50.746px' }}
        >
          <h1
            className="movie-title"
            style={{
              marginTop: 0,
              color: "white",
              textAlign: "left",
              marginRight: "15px",
              fontSize: "clamp(27px,3vw,3.3vw)",
            }}
          >
            {filteredData.Title}
          </h1>
          <h4
            className="movie-desc"
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              maxWidth: "590px",
              textAlign: "left",
              marginRight: "15px",
              fontSize: "clamp(14px,1.1vw,1.4vw)",
            }}
          >
            {filteredData.Description}
          </h4>
          <div
            className="extra-info"
            style={{
              fontSize: "clamp(16px,1.6vw,1.2vw)",
              marginTop: "2rem",
            }}
          >
            <p>
              {filteredData.Duration > 60
                ? `1 hr ${60 - Number(filteredData.Duration)} min`
                : filteredData.Duration}
            </p>
            <p>{filteredData.Release}</p>
            <p
              style={{
                backgroundColor: "rgba(0,0,0,0.35)",
                color: "white",
                padding: "0.07rem",
                paddingLeft: "0.4rem",
                paddingRight: "0.4rem",
              }}
            >
              {filteredData.Country}
            </p>
          </div>
          <ul
            style={{
              textAlign: "left",
              color: "white",
              display: "flex",
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              marginTop: "7px",
              marginBottom: "30px",
              marginRight: "15px",
            }}
          >
            {filteredData.Genre &&
              filteredData.Genre.length > 0 &&
              filteredData.Genre.split(",").map((ele) => {
                return (
                  <li
                    style={{
                      fontWeight: 700,
                      marginRight: "28px",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    key={ele}
                  >
                    {ele.trim()}
                  </li>
                );
              })}
          </ul>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                // window.open(filteredData.Watch, "_blank");
                const idOfUrl = filteredData.Watch.split("/")[6];
                navigate(`/watch-movie/${idOfUrl}`);
              }}
            >
              <i className="fa-solid fa-play"></i> &nbsp;Watch Now
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-thumbs-down"></i>
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          // marginTop: "140px",
          textAlign: "left",
          paddingLeft: "1.3rem",
          color: "white",
          zIndex: 1,
        }}
      >
        <div>
          <h3 style={{ textDecoration: "underline", fontSize: "22px" }}>
            Details
          </h3>
        </div>
        <div>
          <h2>More Info</h2>
          <div>
            <h3 style={{ margin: 0, marginBottom: "0.7rem" }}>Directors</h3>
            <p
              style={{
                fontWeight: 500,
                textDecoration: "underline",
                margin: 0,
                color: "gray",
              }}
            >
              {filteredData.Director}
            </p>
          </div>
          <div style={{ marginTop: "1.8rem", marginBottom: "1.6rem" }}>
            <h3 style={{ margin: 0, marginBottom: "0.7rem" }}>Cast</h3>
            <p
              style={{
                fontWeight: 500,
                margin: 0,
                display: "flex",
                gap: "4px",
              }}
            >
              {filteredData.Actor &&
                filteredData.Actor.length > 0 &&
                filteredData.Actor.split(",").map((ele) => {
                  return (
                    <p
                      style={{
                        margin: 0,
                        color: "gray",
                        textDecoration: "underline",
                      }}
                    >
                      {ele + ","}
                    </p>
                  );
                })}
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: "gray" }}>
            By clicking Play, you agree to our{" "}
            <span
              style={{
                color: "white",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms of Use
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
