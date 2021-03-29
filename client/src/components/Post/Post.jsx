import "./Post.css";

function Post(props) {
  const post = props.post;
  return (
    <div className="post-item">
      <p>{post.name}</p>
      <img src={post.imgURL} alt="post-image" width="300px"/>
      <p>{post.content}</p>
    </div>
  )
}

export default Post;