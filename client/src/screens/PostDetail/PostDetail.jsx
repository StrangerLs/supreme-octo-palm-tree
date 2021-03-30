import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getContent, deleteContent } from "../../services/contents"

function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  
  
  useEffect(() => {

    const getPost = async () => {
      const postDetails = await getContent(id)
      setPost(postDetails)
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
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <img src={post.imgURL} width="300px" />
        <p>{post.post}</p>
      </Layout>
    </div>
  )
}

export default PostDetail