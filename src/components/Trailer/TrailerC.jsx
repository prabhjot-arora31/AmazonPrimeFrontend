import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TrailerC = () => {
  const { trailer } = useParams(); // Get the trailer ID from the URL
  const [isMuted, setIsMuted] = useState(false); // Track mute state
  const iframeRef = useRef(null); // Reference to the iframe
  const navigate = useNavigate();
  useEffect(() => {
    // Function to send a message to the iframe
    const sendMessageToIframe = (command) => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify(command),
          "*"
        );
      }
    };

    // Send mute/unmute command when isMuted changes
    sendMessageToIframe({
      event: "command",
      func: isMuted ? "mute" : "unMute",
    });
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const youtubeUrl = `https://www.youtube.com/embed/${trailer}?autoplay=1&loop=1&controls=1&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=1&playlist=${trailer}`;

  return (
    <>
      <button
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
      </button>
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
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default TrailerC;
