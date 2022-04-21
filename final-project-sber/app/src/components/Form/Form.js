import { useContext, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import "./Form.css";

const Form = () => {
  // Добавляем логин
  const [nickname, setLogin] = useState(" ");
  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  // Добавляем текст поста
  const [text, setText] = useState(" ");
  const changeText = (e) => {
    setText(e.target.value);
  };

  // Добавляем картинку поста
  const [img, setImg] = useState(" ");
  const changeImg = (e) => {
    setImg(e.target.value);
  };

  //добавляем хэштег
  const [hashtag, setHashtag] = useState(" ");
  const changeHashtag = (e) => {
    setHashtag(e.target.value);
  };

  const { addNewPost } = useContext(PostContext);

  const submitHandler = (e) => {
    e.preventDefault();

    // const loginTrim = login.trim();
    // if (loginTrim) {
    //   addNewPost(loginTrim);
    //   setLogin("");
    // }

    addNewPost(nickname, text, img, hashtag);
    setLogin(" ");
    setText(" ");
    setImg(" ");
    setHashtag(" ");
  };

  return (
    <div className="container form-wrapper">
      <h1 className="my-3">Your future post</h1>

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="login" class="form-label">
            Your login
          </label>
          <input
            onChange={changeLogin}
            type="text"
            className="form-control"
            id="login"
            placeholder="What's your name?"
            value={nickname}
          />
        </div>
        <div className="mb-3">
          <label for="text" class="form-label">
            Write something
          </label>
          <input
            onChange={changeText}
            type="text"
            className="form-control"
            id="text"
            value={text}
          />
        </div>
        <div className="mb-3">
          <label for="img" class="form-label">
            Your picture
          </label>
          <input
            className="form-control"
            onChange={changeImg}
            type="text"
            id="img"
            value={img}
          />
        </div>
        <div className="mb-3">
          <label for="hashtag" class="form-label">
            Write hashtag
          </label>
          <input
            className="form-control"
            onChange={changeHashtag}
            type="text"
            id="hashteg"
            value={hashtag}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <button type="submit" className="btn btn-primary">
            Post It
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
