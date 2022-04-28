import { API_TOKEN } from "../../constants";
import {
  ADD_NEW_POST,
  DELETE_POST,
  // EDIT_POST,
  SET_ALL_POSTS,
} from "../types/PostsTypes";
import axios from "axios";
import { axiosInstance } from "../../components/config/axios";

export const setAllPosts = (allPosts) => ({
  type: SET_ALL_POSTS,
  payload: allPosts,
});

export const loadAllPosts = (searchValue) => async (dispatch) => {
  const urlForFetch = searchValue
    ? `https://api.react-learning.ru/posts/search/?query=${searchValue}`
    : "https://api.react-learning.ru/posts";

  // const response = await fetch(urlForFetch, {
  //   headers: {
  //     authorization: `Bearer ${API_TOKEN} `,
  //   },
  // });

  const response = await axiosInstance.get("posts/search/", {
    params: {
      query: searchValue,
    },
  });

  // const postsFromApi = await response.json();
  const postsFromApi = response.data;

  dispatch(setAllPosts(postsFromApi));
};
// Создание нового поста
export const addNewPost = (allPosts) => ({
  type: ADD_NEW_POST,
  payload: allPosts,
});

export const queryNewPost = (post) => async (dispatch) => {
  // const response = await fetch("https://api.react-learning.ru/posts", {
  //   method: "POST",
  //   headers: {
  //     authorization: `Bearer ${API_TOKEN}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: post,
  // });

  const bodyObject = JSON.parse(post);

  const response = await axiosInstance.post("posts", bodyObject);

  // const postFromApi = await response.json();

  const postFromApi = response.data();

  dispatch(addNewPost(postFromApi));
};

export const deletePost = (_id) => {
  return {
    type: DELETE_POST,
    payload: _id,
  };
};

//Редактирование поста

// export const editPost =
//   (_id, newImage, newAuthor, newTitle, newText) => async (dispatch) => {
//     const response = await fetch(
//       "https://api.react-learning.ru/posts/:postId ",
//       {
//         method: "PATCH",
//         type: EDIT_POST,
//         payload: {
//           _id,
//           image: newImage,
//           author: newAuthor,
//           title: newTitle,
//           text: newText,
//         },
//       }
//     );

//     const postFromApi = await response.json();

//     dispatch(editPost(postFromApi));
//   };

//удаление поста
