import Posts from "../Posts/Posts";
import "./Main.css";

// const Main = ({ addNewPost, posts, deletePost }) => {
//   return (
//     <>
//       <Form addNewPost={addNewPost} />
//       <Posts posts={posts} deletePost={deletePost} />
//     </>
//   );
// };

const Main = () => {
  return (
    <>
      <h1 className="text-center my-5">Выразите и вы свое видение мира!</h1>
      <p className="text-center my-5">
        Проект разработан специально для СберУниверситета
      </p>
      <hr />
      <Posts />
    </>
  );
};

export default Main;
