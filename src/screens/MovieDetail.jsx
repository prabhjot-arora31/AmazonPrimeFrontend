import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import MainHeader from "../components/MainHeader";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector((state) => {
    return state.movie;
  });
  const { data } = movie;
  const filteredData = data.filter((rData, fId) => fId == id && rData)[0];
  const navigate = useNavigate();
  console.log(filteredData);
  console.log("image bg:", filteredData.Cover && filteredData.Cover);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "1.2rem",
          backgroundImage:
            "linear-gradient(to top,rgba(0,0,0,0.3),rgba(0,0,0,0.7)",
        }}
      >
        <MainHeader />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 1), rgba(0,0,0,0.5), rgba(0, 0, 0, 0)), url(${filteredData.Cover})`,
          backgroundSize: "cover",
          padding: "1.4rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ padding: "2rem", marginTop: "2.5rem" }}>
          <h1 style={{ color: "white", textAlign: "left" }}>
            {filteredData.Title}
          </h1>
          <h4
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              maxWidth: "590px",
              textAlign: "left",
            }}
          >
            {filteredData.Description}
          </h4>
          <div
            className="extra-info"
            style={{
              fontSize: "16px",
            }}
          >
            <p>
              {filteredData.Duration > 60
                ? `1 hr ${60 - Number(filteredData.Duration)} min`
                : filteredData.Duration}
            </p>
            <p>{filteredData.Release}</p>
            <p
              style={{
                // backgroundColor: ` rgba(95, 90, 90, 0.911)`,
                backgroundColor: "rgba(0,0,0,0.35)",
                // backgroundColor: "transparent",
                color: "white",
                padding: "0.07rem",
                paddingLeft: "0.4rem",
                paddingRight: "0.4rem",
              }}
            >
              {filteredData.Country}
            </p>
          </div>
          <ul
            style={{
              textAlign: "left",
              color: "white",
              display: "flex",
              gap: "40px",
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "1.9rem",
              marginTop: "7px",
              marginBottom: "30px",
            }}
          >
            {filteredData.Genre.split(",").map((ele) => {
              return (
                <li
                  style={{
                    fontWeight: 700,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {ele.trim()}
                </li>
              );
            })}
          </ul>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                window.open(filteredData.Watch, "_blank");
              }}
            >
              <i class="fa-solid fa-play"></i> &nbsp;Watch Now
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i class="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i class="fa-solid fa-thumbs-down"></i>
            </button>
            <button
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i class="fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          textAlign: "left",
          paddingLeft: "4rem",
          color: "white",
        }}
      >
        <div>
          <h3>Details</h3>
        </div>
        <div>
          <h2>More Info</h2>
          <div>
            <h3 style={{ margin: 0, marginBottom: "0.7rem" }}>Directors</h3>
            <p
              style={{
                fontWeight: 500,
                textDecoration: "underline",
                margin: 0,
              }}
            >
              {filteredData.Director}
            </p>
          </div>
          <div style={{ marginTop: "1.8rem" }}>
            <h3 style={{ margin: 0, marginBottom: "0.7rem" }}>Cast</h3>
            <p
              style={{
                fontWeight: 500,
                margin: 0,
                display: "flex",
                gap: "4px",
              }}
            >
              {filteredData.Actor.split(",").map((ele) => {
                return (
                  <p
                    style={{
                      margin: 0,
                      textDecoration: "underline",
                    }}
                  >
                    {ele + ","}
                  </p>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
