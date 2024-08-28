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
  const { data } = movie;
  useEffect(() => {
    dispatch(getMovie());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    return () => {};
  }, []);

  return (
    <div style={{ position: "relative", paddingTop: "1.3rem" }}>
      <MainHeader />
      <Hero />
      <h2
        className="text-white"
        style={{
          textAlign: "left",
          fontSize: "44px",
          marginBottom: "36px",
          color: "white",
          fontWeight: "semi-bold",
          marginLeft: "3.2rem",
        }}
      >
        Movies
      </h2>
      <Movies data={data} heading="Animation Movies" />
      <Movies data={data} heading="Adventure Movies" />
    </div>
  );
};

export default Home;
