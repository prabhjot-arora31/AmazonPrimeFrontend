import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import { useNavigate, useParams } from "react-router-dom";
import Movies from "../components/Movies/Movies";
import "./SpecificMovieType.css";
const SpecificMovieType = () => {
  const [firstMovieLength, setFirstMovieLength] = useState(0);
  const { name } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      console.log(`${name.toLowerCase()}_movies.json`);
      import(`../data/${name.toLowerCase()}_movies.json`)
        .then((data1) => {
          const movies1 = data1.default.result.data;
          console.log("Movies from first file:", movies1);
          setFirstMovieLength(movies1.length);
          // Load the second JSON file after the first has loaded
          setMovieData(movies1);
        })
        .catch((error) => {
          console.error("Error loading movies:", error);
        });
    } catch (error) {}
    const jsonFile = import(`../data/${name.toLowerCase()}_movies.json`);
    console.log(jsonFile.toString());

    return () => {};
  }, []);

  return (
    <div
      style={{ paddingTop: "30px", minHeight: "100vh", paddingBottom: "8.3px" }}
    >
      <MainHeader />
      <div style={{ color: "white" }}>
        <h5
          className="s-header"
          style={{
            textAlign: "left",
            color: "white",
            fontWeight: "bold",
            marginLeft: "1rem",
            marginBottom: "4.6px",
          }}
        >
          {name} Movies
        </h5>
        {/* <Movies data={jsonFile && jsonFile.result && jsonFile.result.data} /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "0.6rem",
            margin: 0,
            gap: "15px",
            paddingLeft: "1.2rem",
            paddingRight: "1.2rem",
          }}
        >
          {movieData.map((movie, id) => {
            return (
              <div
                className="movie-card-specific"
                style={{
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: "flex",
                }}
                onClick={() => {
                  localStorage.setItem("movieCategory", name);
                  localStorage.setItem("movieId", movie.movieId);
                  navigate(`/movie/${movie.movieId}/${name}`);
                }}
              >
                <img
                  src={movie.Cover}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
                <div className="extraInfo">
                  <h3 style={{}}>
                    {movie.Title.length > 20
                      ? movie.Title.slice(0, 20) + "..."
                      : movie.Title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecificMovieType;
