import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions/movieActions";
import MainHeader from "../components/MainHeader";
import Movies from "../components/Movies/Movies";
import data from "../data/animation_movies.json";
import data2 from "../data/adventure_movies.json";
import data3 from "../data/crime_movies.json";
import data4 from "../data/horror_movies.json";
import data5 from "../data/romance_movies.json";
import HomePageContainer from "../components/HomePageContainer/HomePageContainer";
import img1 from "../assets/first.png";
import img2 from "../assets/second.png";
// import data6 from "../data/animation_movies.json";
const Home = () => {
  const navigate = useNavigate();
  const movie = useSelector((state) => {
    console.log("STATE IS:", state);
    return state.movie;
  });
  const dispatch = useDispatch();
  console.log("MOVIE: ", movie);
  useEffect(() => {
    // dispatch(getMovie());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    return () => {};
  }, []);

  return (
    <div
      style={{
        paddingTop: "30px",
        minHeight: "100%",
        paddingBottom: "8.3px",
        backgroundColor: "black",
        paddingBottom: "10px",
      }}
    >
      <MainHeader />
      {/* <Hero /> */}
      <HomePageContainer
        heading={"Welcome to Prime Video"}
        image={img1}
        supportingText={
          "Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals"
        }
        buttonText={"Sign in to join Prime"}
      />
      {/* <div style={{ height: "160px", width: "100%" }} /> */}
      <div
        style={{
          position: "relative",
          top: "3.9rem",
          backgroundColor: "black",
          // height: "94vh",
        }}
      >
        <HomePageContainer
          heading={"Movie Rentals on Prime Video"}
          buttonText={"Rent now"}
          image={img2}
          supportingText="Join Prime to watch the latest movies, TV shows and award-winning Amazon OriginalsEarly Access to new movies, before digital subscription"
        />
      </div>
    </div>
  );
};

export default Home;
