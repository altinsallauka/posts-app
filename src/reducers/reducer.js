import { combineReducers } from "redux";
import PostsReducer from "../components/Posts/reducer";
import ModalReducer from "./../components/modal/reducer";
const rootReducer = combineReducers({
  PostsReducer: PostsReducer,
  ModalReducer: ModalReducer,
});
export default rootReducer;
