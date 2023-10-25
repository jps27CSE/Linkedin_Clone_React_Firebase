import "./index.scss";
import PropTypes from "prop-types";
const PostsCard = ({ posts }) => {
  return (
    <div className="posts-card">
      <p className="timestamp">{posts.timeStamp}</p>
      <p className="status">{posts.status}</p>
    </div>
  );
};

export default PostsCard;

PostsCard.propTypes = {
  posts: PropTypes.object,
};
