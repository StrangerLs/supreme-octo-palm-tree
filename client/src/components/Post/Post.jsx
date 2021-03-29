import "./Post.css";

function Post(props) {
  const post = props.post;
  return (
    <article className="blog-post">
      <h2 className="post-name">{post.name}</h2>
      <img src={post.imgURL} alt="post-image" width="300px" className="post-image"/>
      <p className="post-content">{post.content}</p>
    </article>
  )
}

export default Post;