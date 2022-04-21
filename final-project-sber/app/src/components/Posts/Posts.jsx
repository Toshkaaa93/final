import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import PostItem from "../PostItem/PostItem";

function Posts() {
  const { posts } = useContext(PostContext);

  const contet = () => {
    if (posts.length === 0) {
      return <p>No posts here...</p>;
    }

    return posts.map((post, index) => (
      <PostItem key={post.postId} index={index} {...post} />
    ));
  };

  return (
    <div className="container">
      <div className="row my-5">{contet()}</div>
    </div>
  );
}

export default Posts;
