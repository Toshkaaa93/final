import {
  SET_ALL_POSTS,
  ADD_NEW_POST,
  // EDIT_POST,
  DELETE_POST,
  // CLEAR_ALL_POST,
} from "../types/PostsTypes";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return action.payload;

    case ADD_NEW_POST:
      return [...state, action.payload];

    // case EDIT_POST:
    //   return state.map((post) => {
    //     if (post._id === action.payload._id) {
    //       return {
    //         ...post,
    //         title: action.payload.title,
    //         image: action.payload.image,
    //         author: action.payload.author,
    //         text: action.payload.text,
    //       };
    //     }
    //   });

    case DELETE_POST:
      return state.filter((post) => post._id !== action.payload);

    // case CLEAR_ALL_POST:
    //   return [];

    default:
      return state;
  }
};

export default postsReducer;
