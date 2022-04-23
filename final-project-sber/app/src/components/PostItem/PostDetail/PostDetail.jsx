import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../../../contexts/PostContext";
const { Link } = require("react-router-dom");

const PostDetail = ({ postId, nickname, text, img, liked, hashteg }) => {
  const { postsId } = useParams();
  const controller = useRef(new AbortController());
  const { deletePost } = useContext(PostContext);
  const deleteHandler = () => deletePost(postId);
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/phones/${postsId}`, {
      signal: controller.current.signal,
    })
      .then((response) => response.json())
      .then((dataFromServer) => setPost(dataFromServer));

    return () => {
      controller.current.abort();
    };
  }, []);

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
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-primary mx-1"
        >
          Вернуться
        </button>
        <button type="button" className="btn btn-success mx-1">
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
