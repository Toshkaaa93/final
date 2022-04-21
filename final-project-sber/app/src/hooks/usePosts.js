//кастомный хук

import { useEffect, useState } from "react";

const LSPostsKey = "posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/posts")
      .then((response) => response.json())
      .then((dataFromServer) => setPosts(dataFromServer));
  }, []);

  const addNewPost = (img, nickname, text, hashtag) => {
    const post = {
      img,
      nickname,
      text,
      hashtag,
      postId: Date.now(),
      liked: false,
    };

    setPosts((prev) => [...prev, post]);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.postId !== id));
  };

  const likedPost = (id) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.postId === id) {
          return {
            ...post,
            liked: !post.liked,
          };
        }
        return post;
      })
    );
  };

  const clearPosts = () => {
    setPosts([]);
  };

  //Берет данные из LocalStorage
  useEffect(() => {
    const dataFromLS = localStorage.getItem("LSPostsKey");
    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS));
    }
  }, []);

  //Записывает данные в LocalStorage
  useEffect(() => {
    localStorage.setItem("LSPostsKey", JSON.stringify(posts));
  }, [posts]);

  return {
    posts,
    addNewPost,
    deletePost,
    likedPost,
    clearPosts,
  };
};

export default usePosts;
