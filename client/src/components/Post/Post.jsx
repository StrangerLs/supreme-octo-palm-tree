import { Link } from "react-router-dom";
import "./Post.css";

function Post(props) {
  const post = props.post;
  return (
    <article className="blog-post">
      <Link to={`/posts/${post.id}`}>
        <h2 className="post-title">{post.title}</h2>
      </Link>
      <h3 className="post-author">{post.author}</h3>
      <img
        src={post.imgURL}
        alt="post-image"
        width="300px"
        className="post-image"
      />
      <p className="post-content">{post.content}</p>
    </article>
  );
}

export default Post;
