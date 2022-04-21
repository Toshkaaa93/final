import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import "./PostItem.css";
const { Link } = require("react-router-dom");

const PostItem = ({ postId, nickname, text, img, liked, hashteg }) => {
  const { likedPost, deletePost } = useContext(PostContext);

  const deleteHandler = () => deletePost(postId);

  const likedHandler = () => {
    likedPost(postId);
  };

  return (
    <div className="col-3 card mx-3">
      <h3 className="py-3"> {nickname} </h3>
      <Link to={`/posts/${postId}`}>
        <div className="img-container">
          <img src={img} />
        </div>
      </Link>
      <p className="py-3 post-text"> {text} ...</p>
      <p className="py-3 post-text">#{hashteg}</p>
      <div className="d-flex justify-content-baseline">
        <button
          onClick={likedHandler}
          type="button"
          className="btn btn-like mx-2"
        >
          {liked ? "Not nice" : "Nice!"}
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
