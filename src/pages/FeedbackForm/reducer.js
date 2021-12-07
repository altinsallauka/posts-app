import { ADD_LIST } from "./constants";

const initialState = {
  samples: [],
  //   posts: [],
  //   error: null,
  //   isLoading: false,
};
const FeedbackFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return { ...state, samples: action.payload };
    default:
      return state;
  }
};

export default FeedbackFormReducer;
