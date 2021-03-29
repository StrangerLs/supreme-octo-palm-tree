import { Link } from "react-router-dom";

import "./Home.css";
import Post from "../../components/Post/Post";
import Layout from "../../components/shared/Layout/Layout"


const Home = (props) => {
  const posts = props.posts;
  const setPosts = props.setPosts;
  console.log(props)

  return (
    <main>
      <Layout>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
        </Layout>
    </main>
  )
}

export default Home;