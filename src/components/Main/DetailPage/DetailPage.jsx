import { useContext } from "react";
import { PostListContext } from "../../../contexts/PostListContext";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../Modal/Modal";
import ModalInput from "../../Modal/ModalInput/ModalInput";
import { motion } from "framer-motion";
import "./DetailPage.css";
//импортировала функцию
import { editPost } from "../../../redux/actions/postsAC";
// import { detailPageAnimation } from "../DetailPage/DetailPageAnimation/DetailPageAnimation";

const DetailPage = () => {
  //старый код
  //   const { posts, viewModal, openModal, closeModal } =
  //     useContext(PostListContext);
  //   const { id } = useParams();
  //   const navigate = useNavigate();
  //   const dataForPost = posts.find((post) => post.id === +id);
  //   return (
  //     <>
  //       <h1 className="text-center my-5">Отредактируйте свой пост</h1>
  //       <div
  //         // whileHover={{ scale: 1.1 }}
  //         // whileTap={{ scale: 0.9 }}
  //         className="card card-detail"
  //         style={{ width: "25rem" }}
  //       >
  //         <img src={dataForPost.image} className="card-img-top" alt="img" />
  //         <div className="card-body">
  //           <h5 className="card-title">{dataForPost.topic}</h5>
  //           <p className="card-text">{dataForPost.input}</p>
  //           <p>#{dataForPost.tags} </p>
  //           <button
  //             type="button"
  //             onClick={() => navigate(-1)}
  //             className="btn btn-primary mx-1"
  //           >
  //             Назад
  //           </button>
  //           <button
  //             type="button"
  //             onClick={openModal}
  //             className="btn btn-success mx-1"
  //           >
  //             Редактировать
  //           </button>
  //         </div>
  //       </div>
  //       <Modal state={viewModal} onClose={closeModal}>
  //         <ModalInput createSubmit={() => {}} {...dataForPost} />
  //       </Modal>
  //     </>
  //   );
};

export default DetailPage;
