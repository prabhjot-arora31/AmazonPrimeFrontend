import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector((state) => {
    return state.movie;
  });
  const { data } = movie;
  const filteredData = data.filter((rData, fId) => fId == id && rData)[0];
  const navigate = useNavigate();
  console.log(filteredData);
  return (
    <div>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button>
      <img
        src={filteredData.Cover}
        style={{
          maxWidth: "350px",
          marginLeft: "1.4rem",
          marginRight: "1.4rem",
        }}
      />
      <button
        style={{ marginTop: "1.4rem" }}
        onClick={() => {
          window.location = filteredData.Watch;
        }}
      >
        Play
      </button>
    </div>
  );
};

export default MovieDetail;
