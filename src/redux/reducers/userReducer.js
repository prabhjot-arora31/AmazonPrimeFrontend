import { userDetails } from "../actions/userActions";
import {
  USER_DETAILS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "../constants/userConstants";

const userReducer = (
  state = { userInfo: { error: "", email: "", loggedInUserDetails: {} } },
  { type, payload }
) => {
  switch (type) {
    case "USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER:
      return {
        ...state,
        loading: false,
        userInfo: payload.email
          ? {
              email: payload.email,
              error: "",
            }
          : { error: payload.error, email: "" },
      };
    case USER_LOGIN:
      return {
        ...state,
        loading: false,
        userInfo: payload.user
          ? { email: payload.user.email.email, error: "" }
          : { error: payload.error, email: "" },
      };
    case USER_DETAILS:
      console.log("come to user details");
      return {
        ...state,
        loading: false,
        userInfo: payload.user
          ? { email: payload.user.email.email, error: "" }
          : payload.error
          ? { error: payload.error, email: "" }
          : { loggedInUserDetails: payload },
      };
    case USER_LOGOUT:
      return { loading: false, userInfo: { error: "", email: "" } };
    default:
      return state;
  }
};
export default userReducer;
