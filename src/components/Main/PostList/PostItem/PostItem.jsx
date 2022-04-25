import { motion } from "framer-motion";
import { useContext } from "react";
import { PostListContext } from "../../../../contexts/PostListContext";
import "../PostItem/PostItem.css";
const { Link } = require("react-router-dom");

// const animations = {
//   start: {
//     opacity: 0,
//     y: 100,
//     rotate: 180,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//     rotate: 0,
//     transition: {
//       duration: 2,
//     },
//   },
// };

const PostItem = ({ id, index, topic, image, input, tags }) => {
  const { deletePost } = useContext(PostListContext);
  const deleteHandler = () => deletePost(id);

  return (
    <div
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      className="card bg-primary p-2 text-dark bg-opacity-10  shadow p-3 mb-5 bg-body rounded text-center post-card"
      style={{ width: "25rem" }}
    >
      <h5 className="card-title my-3">
        {index + 1}. {topic}
      </h5>
      <img src={image} className="card-img-top my-3" alt="img" />
      <div className="card-body my-3">
        <p className="card-text">{input}</p>
        <p>
          <small className="text-muted">#{tags}</small>{" "}
        </p>
        <div className="card-btn">
          <div>
            <button
              onClick={deleteHandler}
              type="button"
              className="btn btn-primary btn-delete"
            >
              Удалить пост
            </button>
          </div>
          <div>
            <p className="mx-3">
              <Link className="btn btn-primary btn-edit" to={`/${id}`}>
                Редактировать
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
