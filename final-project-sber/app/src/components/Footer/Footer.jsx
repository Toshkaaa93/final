import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

function Footer() {
  const { clearPosts } = useContext(PostContext);

  return (
    <footer className="d-flex my-5 justify-content-center">
      {/* <button onClick={clearPosts} type="button" className="btn btn-danger">
        Delete All
      </button> */}
      Спасибо, что зашли почитать!
    </footer>
  );
}

// React.nemo позволяет компонентам не рендериться, если у них что-то не изменилось
export default React.memo(Footer);
