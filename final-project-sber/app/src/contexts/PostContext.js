import { createContext } from "react";
import usePosts from "../hooks/usePosts";

const PostContext = createContext();

function PostProvider({ children }) {
  // подключение кастомного хука
  const { posts, addNewPost, clearPosts, likedPost, deletePost } = usePosts();

  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost,
        clearPosts,
        likedPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;

export { PostContext };
