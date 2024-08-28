import axios from "axios";
import { MOVIE_SUCCESS } from "../constants/movieConstants";

const getMovie = () => async (dispatch) => {
  await axios.get("https://amazon-prime-backend.vercel.app/movies").then((response) => {
    console.log("res is:", response.data.result.data);
    dispatch({
      type: MOVIE_SUCCESS,
      payload: response.data.result.data,
    });
  });
};
export { getMovie };
