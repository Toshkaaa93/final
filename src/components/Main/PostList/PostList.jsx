import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostListContext } from "../../../contexts/PostListContext";
import { loadAllPosts } from "../../../redux/actions/postsAC";
import PostItem from "./PostItem/PostItem";
import "./PostList.css";
/*
const PostList = () => {
  const { posts } = useContext(PostListContext);
  const [searchInput, setSearchInput] = useState("");
  const filterPost = posts.filter((post) => {
    return post.topic.toLowerCase().includes(searchInput.toLowerCase());
  });*/
// мой код
const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(loadAllPosts());
  }, []);

  console.log(loadAllPosts());

  if (!posts.length) return <div> Пока никто ничего не написал</div>;
  // конец моего кода
  return (
    <Grid container spacing={2}>
      {posts.map((post) => {
        return <PostItem key={post._id} {...post} />;
      })}
    </Grid>
  );
};

/*return (
    <>
      <p className="text-center">
        Хочешь что-то конкретное? Вписывай вот в эту штуку тег. <br />
        Найдет все, даже заначка.
      </p>
      <form className="d-flex flex-column align-items-center my-5">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="поиск по постам"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </form>

      <div className="row row-cols-1">
        {filterPost.length ? (
          filterPost.map((post, i) => {
            return (
              <PostItem
                key={post.id}
                index={i}
                id={post.id}
                topic={post.topic}
                image={post.image}
                input={post.input}
                tags={post.tags}
              />
            );
          })
        ) : (
          <p>В данный момент ваша лента пуста</p>
        )}
      </div>
    </>
  );
};
*/
export default PostList;
