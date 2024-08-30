import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions/movieActions";
import MainHeader from "../components/MainHeader";
import MoviesC from "../components/Movies/Movies";
import data from "../data/animation_movies.json";
import data2 from "../data/adventure_movies.json";
import data3 from "../data/crime_movies.json";
import data4 from "../data/horror_movies.json";
import data5 from "../data/romance_movies.json";
// import data6 from "../data/animation_movies.json";
const Movies = () => {
  const navigate = useNavigate();
  const movie = useSelector((state) => {
    console.log("STATE IS:", state);
    return state.movie;
  });
  const dispatch = useDispatch();
  console.log("MOVIE: ", movie);
  // const data = movie[0].result.data;
  // const data2 = movie[1].result.data;
  // console.log(movie.data[0].result.data);
  // const data = movie.data[0] ? movie.data[0].result.data : [];
  // const data2 = movie.data[1] ? movie.data[1].result.data : [];
  // const data = [];
  // const data2 = [];
  // const data3 = movie.data[2] ? movie.data[2].result.data : [];
  // const data4 = movie.data[3] ? movie.data[3].result.data : [];
  // const data5 = movie.data[4] ? movie.data[4].result.data : [];
  useEffect(() => {
    // dispatch(getMovie());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    return () => {};
  }, []);

  return (
    <div
      style={{ paddingTop: "30px", minHeight: "100vh", paddingBottom: "8.3px" }}
    >
      <MainHeader />
      {/* <Hero /> */}
      <h2
        className="text-white"
        style={{
          textAlign: "left",
          // fontSize: "4vw", // Use viewport-based font size
          fontSize: `clamp(26px, 10vw, 29px)`,
          maxWidth: "25px", // Cap the maximum width
          minWidth: "22px", // Ensure a minimum size
          marginBottom: "1px",
          color: "white",
          marginTop: 0,
          fontWeight: "600",
          marginLeft: "1rem",
        }}
      >
        Movies
      </h2>
      <MoviesC data={data.result.data} heading="Animation Movies" />
      <MoviesC data={data2.result.data} heading="Adventure Movies" />
      <MoviesC data={data3.result.data} heading="Crime Movies" />
      <MoviesC data={data4.result.data} heading="Horror Movies" />
      <MoviesC data={data5.result.data} heading="Romance Movies" />
    </div>
  );
};

export default Movies;
