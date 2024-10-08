import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Trailer from "./screens/Trailer";
import MovieDetail from "./screens/MovieDetail";
import WatchMovie from "./screens/WatchMovie";
import SpecificMovieType from "./screens/SpecificMovieType";
import Movies from "./screens/Movies";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ backgroundColor: "black" }}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Register /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id/profile" element={<Profile />} />
        <Route path="/trailer/:trailer" element={<Trailer />} />
        <Route path="/movie/:id/:genre?" element={<MovieDetail />} />
        <Route path="/watch-movie/:id" element={<WatchMovie />} />
        <Route path="/browse-more/:name" element={<SpecificMovieType />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Login /> */}
      </Routes>
    </div>
  );
}

export default App;
