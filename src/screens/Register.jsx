import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import { USER_REGISTER } from "../redux/constants/userConstants";
import { Link, useNavigate } from "react-router-dom";
const Register = ({ history }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
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
    e.preventDefault();
    console.log("acd");
    dispatch(userRegister(userData.name, userData.email, userData.password));
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
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={userData.name}
          id="name"
          placeholder="Enter name"
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          placeholder="Enter email"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          id="password"
          placeholder="Enter password"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
        />
        <input type="submit" value="Register" />
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
