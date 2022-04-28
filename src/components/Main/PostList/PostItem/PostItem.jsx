import * as React from "react";
import { useContext } from "react";
import { PostListContext } from "../../../../contexts/PostListContext";
import "../PostItem/PostItem.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../redux/actions/postsAC";
const { Link } = require("react-router-dom");
//старый код
/*
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
*/

// const PostItem = ({ image, author, title, text }) => {
//   const { deletePost } = useContext(PostListContext);
//   // const deleteHandler = () => deletePost(id);

//   return (
//     <div class="card my-5">
//       <img src={image} class="card-img-top" alt="" />
//       <div class="card-body">
//         <h5 class="card-title">{title}</h5>
//         <p class="card-text">{text}</p>
//       </div>
//     </div>
//   );
// };

// export default PostItem;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostItem = ({ image, author, title, text, _id }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deletePost(_id));
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {author.name.slice(0, 1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="194" image={image} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Link className="btn btn-primary btn-edit" to={`posts/${_id}`}>
              Редактировать
            </Link>
            <Button
              onClick={deleteHandler}
              type="button"
              className="btn btn-primary btn-delete"
            >
              Удалить пост
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default PostItem;
