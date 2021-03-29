import "./Home.css";
import Layout from "../../components/shared/Layout/Layout"


const Home = (props) => {
  const posts = props.posts;
  const setPosts = props.setPosts;
  console.log(props)

  return (
    <main>
      <Layout>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.name}</p>
          <img src={post.imgURL} alt="post-image" width="300px"/>
          <p>{post.content}</p>
        </div>
      ))}
        </Layout>
    </main>
  )
}

export default Home;