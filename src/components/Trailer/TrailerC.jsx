import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TrailerC = ({ trailerFC }) => {
  console.log("trailerFC", trailerFC);
  // const { trailer } = useParams(); // Get the trailer ID from the URL
  const iframeRef = useRef(null); // Reference to the iframe
  const youtubeUrl = `https://www.youtube.com/embed/${
    trailerFC && trailerFC.split("=")[1]
  }?autoplay=1&loop=1&controls=0&mute=1&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=0&playlist=${
    trailerFC && trailerFC.split("=")[1]
  }&cc_load_policy=0`;

  return (
    <>
      {/* <button
        style={{ marginBottom: "1.3rem" }}
        onClick={() => {
          navigate("/home");
        }}
      >
        Back
      </button>
      <button
        onClick={toggleMute}
        style={{ marginBottom: "1.3rem", marginLeft: "1.4rem" }}
      >
        {isMuted ? "Unmute" : "Mute"}
      </button> */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          aspectRatio: "16/9",
        }}
      >
        <iframe
          ref={iframeRef}
          width="300%"
          height="100%"
          style={{ marginLeft: "-100%" }}
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
};

export default TrailerC;
