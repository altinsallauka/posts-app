import {
  ADD_POST_ERROR,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  EDIT_POST_ERROR,
  EDIT_POST_LOADING,
  EDIT_POST_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS,
} from "./constants";

import PostsDataService from "../../services/posts.service";

//   export const createPost = (title, description) => async (dispatch) => {
//     try {
//       const res = await PostsDataService.create({ title, description });

//       dispatch({
//         type: CREATE_TUTORIAL,
//         payload: res.data,
//       });

//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };

export const retrievePosts = () => async (dispatch) => {
  dispatch({
    type: FETCH_POSTS_LOADING,
    payload: true,
  });
  try {
    const res = await PostsDataService.getAll();

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: FETCH_POSTS_LOADING,
      payload: false,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_POSTS_ERROR,
      payload: err,
    });
    dispatch({
      type: FETCH_POSTS_LOADING,
      payload: false,
    });
  }
};

//   export const updateTutorial = (id, data) => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.update(id, data);

//       dispatch({
//         type: UPDATE_TUTORIAL,
//         payload: data,
//       });

//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };

//   export const deleteTutorial = (id) => async (dispatch) => {
//     try {
//       await TutorialDataService.delete(id);

//       dispatch({
//         type: DELETE_TUTORIAL,
//         payload: { id },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   export const deleteAllTutorials = () => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.deleteAll();

//       dispatch({
//         type: DELETE_ALL_TUTORIALS,
//         payload: res.data,
//       });

//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };

//   export const findTutorialsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.findByTitle(title);

//       dispatch({
//         type: RETRIEVE_TUTORIALS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
