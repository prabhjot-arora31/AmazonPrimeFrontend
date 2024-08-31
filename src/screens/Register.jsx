import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userRegister, userRequest } from "../redux/actions/userActions";
import { USER_REGISTER } from "../redux/constants/userConstants";
import { Link, useNavigate } from "react-router-dom";
const Register = ({ history }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.user.loading);
  // const navigate = useNavigate()
  const { error, email } = userInfo;
  const registeredUser = useSelector((state) => {
    console.log("state is:", state);
    return state.user;
  });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    alert("hey");
    e.preventDefault();
    dispatch(userRequest());
    // console.log("acd");
    // console.log(userData);
    dispatch(
      userRegister(userData.name, userData.email, userData.password, navigate)
    );
    // dispatch({
    //   type: USER_REGISTER,
    //   payload: { name: "Prabhjot", email: "pra@g.co" },
    // });
  };
  useEffect(() => {
    if (localStorage.getItem("id")) {
      navigate(`/home`);
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
        src="https://m.media-amazon.com/images/G/01/digital/PV_Logo_Landscape_Smile_Centred_Dark_Squid_Ink_RGB_150._CB554671110_.png"
        width={`160px`}
        alt="Amazon prime video image"
      />
      <div
        style={{
          width: "300px",
          border: "1px solid lightgray",
          padding: "1.03rem",
          marginTop: "20px",
          borderRadius: "10px",

          margin: "0 auto",
        }}
      >
        <div
          className="d-flex flex-column py-4 "
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <h2
            style={{
              fontWeight: "490",
              marginTop: 0,
              fontSize: "28px",
              textAlign: "left",
              marginBottom: 0,
            }}
          >
            Create Account
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
              Your Name
            </label>
            <input
              type="text"
              name="text"
              id="text"
              value={userData.name}
              style={{
                paddingTop: "0.6rem",
                borderRadius: "0.21rem",
                border: "1px solid black",
                padding: "0.3rem",
                width: "100%",
                alignSelf: "stretch",
              }}
              placeholder="First and Last Name"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            {/* {CustomError == "Please enter email field" && (
            <p style={{ fontSize: "0.9rem", margin: 0, color: "red" }}>
              {CustomError}
            </p>
          )} */}
          </div>
          <div
            style={{
              marginTop: "9.7px",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "start",
              alignItems: "start",
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ fontWeight: "600", fontSize: "14px" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              style={{
                paddingTop: "0.9rem",
                paddingBottom: "0.9rem",
                borderRadius: "0.21rem",
                border: "1px solid black",
                padding: "0.3rem",
                width: "100%",
              }}
              className="mt-1 border border-primary"
              placeholder="Your email address"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            {/* {CustomError == "Please enter password field" && (
            <p style={{ fontSize: "0.9rem", margin: 0, color: "red" }}>
              {" "}
              {CustomError}{" "}
            </p>
          )} */}
          </div>
          <div
            style={{
              marginTop: "9.7px",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "start",
              alignItems: "start",
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ fontWeight: "600", fontSize: "14px" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
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
              placeholder="Atleast 6 characters"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            {/* {CustomError == "Please enter password field" && (
            <p style={{ fontSize: "0.9rem", margin: 0, color: "red" }}>
              {" "}
              {CustomError}{" "}
            </p>
          )} */}
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                marginTop: "3px",
                fontWeight: "500",
                color: "lightblack",
              }}
            >
              Passwords must be atleast 6 characters.
            </p>
          </div>
          <button
            disabled={isLoading ? true : false}
            type="submit"
            onClick={submitHandler}
            style={{
              backgroundColor: "#FFD814",
              marginTop: "12.7px",
              fontSize: "13.3px",
              width: "100%",
              padding: "0.3rem 0.7rem",
            }}
          >
            {isLoading == true ? "Loading..." : "Create your Amazon account"}
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
        </div>
        <hr
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            borderColor: "lightgray", // Red color for the border
            borderWidth: "1px", // Thickness of the line
            borderStyle: "solid",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: "13.6px",
            alignItems: "center",
            gap: "4px",
            marginTop: "20px",
          }}
        >
          <p style={{ margin: 0 }}>Already have an account? </p>
          <Link to={"/login"}>Sign in </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
