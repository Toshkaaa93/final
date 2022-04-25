// import PostForm from "./PostForm/PostForm";
import "./Main.css";
import PostList from "./PostList/PostList";

const Main = () => {
  return (
    <>
      <div className="mainpage-animation my-5">
        <div title="Instagram">Соцсетка@</div>
      </div>
      {/* <PostForm />
      <hr /> */}
      <PostList />
    </>
  );
};

export default Main;
