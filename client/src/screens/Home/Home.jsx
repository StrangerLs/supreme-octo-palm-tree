import "./Home.css";


const Home = (props) => {
  const posts = props.posts;
  const setPosts = props.setPosts;

  return (
    <main>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.name}</p>
          <img src={post.imgURL} alt="post-image" width="300px"/>
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  )
}

export default Home;