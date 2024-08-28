import axios from "axios";
import { MOVIE_SUCCESS } from "../constants/movieConstants";

const getMovie = () => async (dispatch) => {
  await axios.get("/movies").then((response) => {
    console.log("res is:", response.data.result.data);
    dispatch({
      type: MOVIE_SUCCESS,
      payload: response.data.result.data,
    });
    // localStorage.setItem(
    //   "movieConstants",
    //   JSON.stringify(response.data.result.data)
    // );
  });
};
export { getMovie };
