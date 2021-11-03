import { combineReducers } from "redux";
import categoriesReducer from "../components/Posts/reducer";
const rootReducer = combineReducers({
  PostsReducer: categoriesReducer,
});
export default rootReducer;
