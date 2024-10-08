import axios from "axios";
import {
  USER_DETAILS,
  USER_LOGIN,
  USER_REGISTER,
} from "../constants/userConstants";

export const userRequest = () => {
  return {
    type: "USER_REQUEST",
  };
};

const userLogin = (email, password, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `https://amazon-prime-backend.vercel.app/api/user/login`,
      {
        email,
        password,
      }
    );
    console.log("data from login: ", data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.user._id);
    localStorage.setItem('email',data.user.email);
    localStorage.setItem("name", data.user.fullName);
    dispatch({
      type: USER_LOGIN,
      payload: data,
    });
    navigate("/");
  } catch (err) {
    if (err.response) {
      console.log("LOGIN: ", err.response.data);
      dispatch({ type: USER_LOGIN, payload: err.response.data });
    }
  }
};
const userRegister =
  (fullName, email, password, navigate) => async (dispatch) => {
    console.log("inside userRegister:", fullName, email, password);
    try {
      const { data } = await axios.post(
        `https://amazon-prime-backend.vercel.app/api/user`,
        {
          fullName,
          email,
          password,
        }
      );
      console.log("data from register: ", data);
      console.log("data.user is:", data.user);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem("token", data.token);
      dispatch({
        type: USER_REGISTER,
        payload: data.user,
      });
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.message);
        console.log(err.response.data);
        dispatch({ type: USER_REGISTER, payload: err.response.data });
      } else {
        console.log("error occured.");
      }
    }
  };
const userDetails = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://amazon-prime-backend.vercel.app/api/user/profile",
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
  console.log("USER DETAILS: ", data.user);
  dispatch({ type: USER_DETAILS, payload: data.user });
};
const userLogout = () => async () => {};
export { userLogin, userRegister, userLogout, userDetails };
