import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const WatchMovie = () => {
  const { id } = useParams();
  const url = `https://vidsrc.cc/v2/embed/movie/${id}`;
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", boxSizing: "border-box" }}>
      <button
        onClick={() => {
          navigate(`/movie/${localStorage.getItem("movieId")}`);
        }}
        style={{
          marginTop: "10px",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Back
      </button>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          height: "0",
          paddingBottom: "56.25%", // Maintain 16:9 aspect ratio
          margin: "0 auto",
         // border: "1px solid white",
        }}
      >
        <iframe
          src={url}
          style={{
            border:'1px solid white',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px", // Optional: Add rounded corners if desired
          }}
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default WatchMovie;
