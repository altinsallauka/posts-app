import { combineReducers } from "redux";
import FeedbackFormReducer from "../pages/FeedbackForm/reducer";
const rootReducer = combineReducers({
  FeedbackFormReducer: FeedbackFormReducer,
});
export default rootReducer;
