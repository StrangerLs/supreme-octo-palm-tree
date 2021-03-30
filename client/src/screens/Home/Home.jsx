

import "./Home.css";

import Post from "../../components/Post/Post";

import Layout from "../../components/shared/Layout/Layout"

import { getContents } from "../../services/contents";
import { useEffect, useState } from "react";



const Home = (props) => {
  // const posts = props.posts;
  // const setPosts = props.setPosts;
  // console.log(props)
  const [allContents, setAllContents] = useState([])
  

  useEffect(() => {
    const fetchContents = async () => {
      const contents = await getContents()
      setAllContents(contents)
    }
    fetchContents()
  }, [props.toggleFetch])

  
  return (
    <main>
      <Layout>
        {allContents.map((content, index) => (
          <Post post={content} key={content._id}
            index={index}/>
        ))}
      </Layout>
    </main>
    // <main>
    //   <Layout>
    //   {posts.map((post, index) => (
    //     <Post post={post} key={index} />
    //   ))}
    //     </Layout>
    // </main>
  )
}

export default Home;