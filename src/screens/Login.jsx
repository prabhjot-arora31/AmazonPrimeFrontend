import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../redux/constants/userConstants";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [CustomError, setCustomError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => {
    console.log(state);
    return state.user.userInfo;
  });
  const { email, error } = userInfo;

  const handleSubmit = (e) => {
    dispatch({ type: USER_LOGIN, payload: "" });
    e.preventDefault();
    if (userData.email.trim() === "") {
      setCustomError("Please enter email field");
    } else if (userData.password.trim() === "") {
      setCustomError("Please enter password field");
    } else dispatch(userLogin(userData.email, userData.password));
  };
  //   if (error.length > 0 || email.length > 0) {
  //     setCustomError("");
  //   }
  useEffect(() => {
    if (localStorage.getItem("id")) {
      navigate(`/home`);
    }
  }, [email]);

  return (
    <div
      className="d-flex flex-column justify-center align-items-center"
      style={{
        width: "90vw",
        margin: 0,
        minHeight: "90vh",
        backgroundColor: "white",
      }}
    >
      {error && (
        <p
          style={{
            margin: 0,
            color: "red",
            marginBottom: "0.9rem",
            fontSize: "1.1rem",
            border: "1px solid red",
            padding: "0.3rem",
            borderRadius: "0.6rem",
          }}
        >
          {error}
        </p>
      )}
      <img
        src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png"
        width={`120px`}
        alt="Amazon prime video image"
      />
      <form onSubmit={handleSubmit} className="d-flex flex-column py-4">
        <div className="d-flex flex-column">
          <label htmlFor="">Enter email</label>
          <input
            type="email"
            name="email"
            id="email"
            style={{
              paddingTop: "0.6rem",
              borderRadius: "0.21rem",
              border: "1px solid black",
              padding: "0.3rem",
            }}
            className="mt-1 mb-2 border border-primary"
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
        <div className="d-flex flex-column">
          <label htmlFor="">Enter password</label>
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
          type="submit"
          className="mt-2 py-1 bg-warning"
          style={{ backgroundColor: "yellow" }}
        >
          Login
        </button>
        <p style={{ fontSize: "clamp(0.6rem,0.76rem,1.4rem)" }}>
          By continuing, you agree to the Amazon Conditions of Use and Privacy
          Notice.
        </p>
      </form>
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            color: "gray",
            marginBottom: "0.5rem",
          }}
        >
          New to amazon?
        </p>
        <Link
          to="/"
          style={{
            color: "black",
            marginTop: "0.5rem",
            border: "1px solid gray",
            paddingLeft: "0.9rem",
            paddingRight: "0.9rem",
            paddingTop: "0.4rem",
            fontSize: "0.9rem",
            borderRadius: "0.2rem",
            fontWeight: "400",
            minWidth: "120px",
            paddingBottom: "0.4rem",
          }}
        >
          Create your account
        </Link>
      </div>
    </div>
  );
};

export default Login;
