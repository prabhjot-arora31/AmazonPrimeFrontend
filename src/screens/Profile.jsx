import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../redux/actions/userActions";

const Profile = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  const { loggedInUserDetails } = user.userInfo;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDetails());
    return () => {};
  }, []);

  return (
    <div>
      <button
        style={{ border: "1px solid black" }}
        onClick={() => {
          navigate(`/home/${localStorage.getItem("id")}`);
        }}
      >
        Back
      </button>
      <div>
        {loggedInUserDetails ? (
          <div>
            <p>Name: {loggedInUserDetails.fullName}</p>
            <p>Email: {loggedInUserDetails.email}</p>
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
