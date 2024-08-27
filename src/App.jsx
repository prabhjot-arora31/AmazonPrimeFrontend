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

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full p-0">
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Register /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:id/profile" element={<Profile />} />
        <Route path="/trailer/:trailer" element={<Trailer />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        {/* <Login /> */}
      </Routes>
    </div>
  );
}

export default App;
