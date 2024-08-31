import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRequest } from "../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../redux/constants/userConstants";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [CustomError, setCustomError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isLoading = useSelector((state) => state.user.loading);
  const userInfo = useSelector((state) => {
    console.log("FROM LOGIN: ", state);
    return state.user.userInfo;
  });
  const { error } = userInfo;
  useEffect(() => {
    console.log(loading);

    return () => {};
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(userRequest());
    setCustomError("");
    dispatch(userLogin(userData.email, userData.password, navigate));
    if (userData.email.trim() === "") {
      setCustomError("Please enter email field");
      setLoading(false);
    } else if (userData.password.trim() === "") {
      setCustomError("Please enter password field");
      setLoading(false);
    } else {
      dispatch(userLogin(userData.email, userData.password));
      setLoading(false);
    }
  };
  //   if (error.length > 0 || email.length > 0) {
  //     setCustomError("");
  //   }
  useEffect(() => {
    if (localStorage.getItem("id")) {
      navigate(`/movies`);
    }
  }, []);

  return (
    <div
      className="d-flex flex-column justify-center align-items-center mx-auto"
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        minHeight: "90vh",
        backgroundColor: "white",
        paddingTop: "1.2rem",
      }}
    >
      <img
        src="https://m.media-amazon.com/images/G/01/digital/PV_Logo_Landscape_Smile_Centred_Dark_Squid_Ink_RGB_150._CB554671110_.png"
        width={`160px`}
        alt="Amazon prime video image"
      />
      {error && (
        <div
          style={{
            margin: "0 auto",
            color: "red",
            marginBottom: "0.9rem",
            fontSize: "0.9rem",
            fontWeight: "400",
            width: "300px",
            border: "1px solid red",
            display: "flex",
            gap: "8px",
            padding: "0.5rem",
            textAlign: "left",
            borderRadius: "0.3rem",
          }}
        >
          <i
            className="fa fa-exclamation-triangle"
            style={{ color: "lightred", fontSize: "24px" }}
          ></i>

          <div>
            <p style={{ margin: 0, fontSize: "1.03rem" }}>
              There was a problem
            </p>
            <p style={{ color: "black", margin: 0 }}>
              {error == "Invalid password"
                ? "Your password is incorrect"
                : error}
            </p>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column py-4 "
        style={{
          width: "300px",
          margin: "0 auto",
          border: "1px solid lightgray",
          padding: "1.3rem",
          marginTop: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h2
          style={{
            fontWeight: "500",
            marginTop: 0,
            fontSize: "28px",
            textAlign: "left",
            marginBottom: 0,
          }}
        >
          Sign in
        </h2>
        <div
          style={{
            marginTop: "6.7px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "start",
            alignItems: "start",
            width: "100%",
          }}
        >
          <label htmlFor="" style={{ fontWeight: "600", fontSize: "14px" }}>
            Enter email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            style={{
              paddingTop: "0.6rem",
              borderRadius: "0.21rem",
              border: "1px solid black",
              padding: "0.3rem",
              width: "100%",
              alignSelf: "stretch",
            }}
            placeholder="Enter email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          {CustomError == "Please enter email field" && (
            <p style={{ fontSize: "0.9rem", margin: 0, color: "red" }}>
              {CustomError}
            </p>
          )}
        </div>
        <div
          style={{
            marginTop: "7.7px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "start",
            alignItems: "start",
            width: "100%",
          }}
        >
          <label htmlFor="" style={{ fontWeight: "600", fontSize: "14px" }}>
            Enter password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            style={{
              paddingTop: "0.9rem",
              paddingBottom: "0.9rem",
              borderRadius: "0.21rem",
              border: "1px solid black",
              padding: "0.3rem",
              width: "100%",
            }}
            className="mt-1 border border-primary"
            placeholder="Enter password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          {CustomError == "Please enter password field" && (
            <p style={{ fontSize: "0.9rem", margin: 0, color: "red" }}>
              {" "}
              {CustomError}{" "}
            </p>
          )}
        </div>
        <button
          disabled={isLoading ? true : false}
          type="submit"
          style={{
            backgroundColor: "#FFD814",
            marginTop: "12.7px",
            fontSize: "14.3px",
            width: "100%",
            padding: "0.3rem 0.7rem",
          }}
        >
          {isLoading == true ? "Loading..." : "Sign in"}
        </button>
        <p
          style={{
            fontSize: "clamp(0.6rem,0.76rem,1.4rem)",
            textAlign: "left",
          }}
        >
          By continuing, you agree to the Amazon{" "}
          <span style={{ textDecoration: "underline", color: "blue" }}>
            {" "}
            Conditions of Use and Privacy Notice.
          </span>
        </p>
        <p
          style={{
            fontSize: "clamp(0.6rem,0.79rem,1.4rem)",
            fontWeight: "500",
            cursor: "pointer",
            color: "blue",
            textAlign: "left",
            marginBottom: 0,
          }}
        >
          Need help?
        </p>
      </form>
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            color: "gray",
            marginBottom: "0.5rem",
            marginTop: "20px",
            fontWeight: "400",
          }}
        >
          New to amazon?
        </p>
        <Link
          to="/register"
          style={{
            color: "black",
            marginTop: "0.5rem",
            border: "1px solid gray",
            paddingLeft: "0.9rem",
            paddingRight: "0.9rem",
            paddingTop: "0.2rem",
            fontSize: "0.8rem",
            borderRadius: "0.2rem",
            fontWeight: "400",
            // width: "100%",
            width: "300px",
            // minWidth: "120px",
            paddingBottom: "0.2rem",
          }}
        >
          Create your account
        </Link>
      </div>
    </div>
  );
};

export default Login;
