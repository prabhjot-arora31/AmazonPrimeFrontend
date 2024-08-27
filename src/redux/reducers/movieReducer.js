import {
  MOVIE_ERROR,
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
} from "../constants/movieConstants";

const movieReducer = (
  state = { loading: false, data: [] },
  { type, payload }
) => {
  switch (type) {
    case MOVIE_REQUEST:
      return { loading: true, data: [] };
    case MOVIE_SUCCESS:
      console.log("INSIDE MOVIE SUCCESS:", payload);
      return { ...state, loading: false, data: payload };
    case MOVIE_ERROR:
      return { loading: false, data: [], error: payload };
    default:
      return state;
  }
};
export default movieReducer;
