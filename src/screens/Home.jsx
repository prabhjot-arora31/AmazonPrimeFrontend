import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions/movieActions";
import MainHeader from "../components/MainHeader";
import Movies from "../components/Movies/Movies";

const Home = () => {
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
  const data = movie.data[0] ? movie.data[0].result.data : [];
  const data2 = movie.data[1] ? movie.data[1].result.data : [];
  // const data = [];
  // const data2 = [];
  const data3 = movie.data[2] ? movie.data[2].result.data : [];
  const data4 = movie.data[3] ? movie.data[3].result.data : [];
  const data5 = movie.data[4] ? movie.data[4].result.data : [];
  useEffect(() => {
    dispatch(getMovie());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    return () => {};
  }, []);

  return (
    <div style={{ paddingTop: "30px", minHeight: "100vh" }}>
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
      <Movies data={data} heading="Animation Movies" />
      <Movies data={data2} heading="Adventure Movies" />
      <Movies data={data3} heading="Crime Movies" />
      <Movies data={data4} heading="Horror Movies" />
      <Movies data = {data5} heading="Romance Movies" />
    </div>
  );
};

export default Home;
