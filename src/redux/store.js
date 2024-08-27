import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";
import movieReducer from "./reducers/movieReducer";
const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = localStorage.getItem("id");
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
