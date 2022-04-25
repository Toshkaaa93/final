import { useContext, useState } from "react";
import { PostListContext } from "../../../contexts/PostListContext";
import "../PostForm/PostForm.css";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState("");
  const [input, setInput] = useState("");
  const [tags, setTags] = useState("");

  const { createPost } = useContext(PostListContext);

  const changeTopic = (e) => setTopic(e.target.value);
  const changeImage = (e) => setImage(e.target.value);
  const changeHandler = (e) => setInput(e.target.value);
  const changeTags = (e) => setTags(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const inputTrim = input.trim();
    const topicTrim = topic.trim();
    const imageTrim = image.trim();
    const tagsTrim = tags.trim();
    if (inputTrim && topicTrim && imageTrim && tagsTrim) {
      createPost(inputTrim, topicTrim, imageTrim, tagsTrim);
      setTopic("");
      setImage("");
      setInput("");
      setTags("");
    }
  };

  const history = useNavigate();

  return (
    <div className="container form-wrapper my-5">
      <div className="row">
        <form onSubmit={submitHandler}>
          <div className="mb-3 d-flex align-items-center flex-column">
            <input
              type="text"
              name="name"
              className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
              aria-describedby="emailHelp"
              placeholder="Заголовок поста"
              value={topic}
              onChange={changeTopic}
            />
            <input
              type="text"
              name="img"
              className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
              aria-describedby="emailHelp"
              placeholder="Ссылка на картинку"
              value={image}
              onChange={changeImage}
            />
            <input
              type="text"
              name="text"
              className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
              aria-describedby="emailHelp"
              placeholder="Текст поста"
              value={input}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="tag"
              className="form-control bg-primary p-2 text-dark bg-opacity-10 m-1"
              aria-describedby="emailHelp"
              placeholder="Добавить свой тег"
              value={tags}
              onChange={changeTags}
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="submit" className="btn btn-primary">
              Добавить пост
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => history("/")}
            >
              К постам!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
