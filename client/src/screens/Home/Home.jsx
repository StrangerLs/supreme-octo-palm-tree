import { Link } from "react-router-dom";

import "./Home.css";
import Post from "../../components/Post/Post";


const Home = (props) => {
  const posts = props.posts;
  const setPosts = props.setPosts;

  return (
    <main>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </main>
  )
}

export default Home;