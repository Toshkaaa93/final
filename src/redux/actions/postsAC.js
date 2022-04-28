import { API_TOKEN } from "../../constants";
import {
  ADD_NEW_POST,
  DELETE_POST,
  // EDIT_POST,
  SET_ALL_POSTS,
} from "../types/PostsTypes";

export const setAllPosts = (allPosts) => ({
  type: SET_ALL_POSTS,
  payload: allPosts,
});

export const loadAllPosts = () => async (dispatch) => {
  const response = await fetch("https://api.react-learning.ru/posts", {
    headers: {
      authorization: `Bearer ${API_TOKEN} `,
    },
  });

  const postsFromApi = await response.json();

  dispatch(setAllPosts(postsFromApi));
};
// Создание нового поста
export const addNewPost = (allPosts) => ({
  type: ADD_NEW_POST,
  payload: allPosts,
});

export const queryNewPost = (post) => async (dispatch) => {
  const response = await fetch("https://api.react-learning.ru/posts", {
    method: "POST",
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: post,
  });

  const postFromApi = await response.json();

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
