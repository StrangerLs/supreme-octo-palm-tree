import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getContent, deleteContent } from "../../services/contents"

function PostDetail(props) {
  const [posts, setPosts] = useState(null);
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  
  
  useEffect(() => {

    const getPost = async () => {
      const post = await getContent(id)
      setPosts(post)
      setLoaded(true)
    }

    getPost()
  }, [id])

  if (!isLoaded) {
    return <h1>NO POST FOUND</h1>
  }
  return (
    <div>
      <Layout>
        <h2>{posts.title}</h2>
        <h3>{posts.author}</h3>
        <img src={posts.imgURL} width="300px" />
        <p>{posts.post}</p>
      </Layout>
    </div>
  )
}

export default PostDetail