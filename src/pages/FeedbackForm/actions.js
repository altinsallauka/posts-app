import { ADD_LIST } from "./constants";

export const addList = (data) => async (dispatch) => {
  dispatch({
    type: ADD_LIST,
    payload: data,
  });
};
