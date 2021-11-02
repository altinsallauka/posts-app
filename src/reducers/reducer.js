import { combineReducers } from "redux";
import categoriesReducer from "../components/Posts/reducer";
import Posts from "./../components/Posts/Posts";
const rootReducer = combineReducers({
  PostsReducer: categoriesReducer,
});
export default rootReducer;
