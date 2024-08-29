import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";
import movieReducer from "./reducers/movieReducer";
import mobileScreenHeader from "./actions/mobileScreenHeader";
const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer, // data is in movie.data
  mobileScreenHeader,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = localStorage.getItem("id");
// console.log("movieState: ", JSON.parse(movieState));
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
