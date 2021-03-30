import { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";


import { getContent, deleteContent } from '../../services/contents';

import Layout from "../../components/shared/Layout/Layout";


const PostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const history = useHistory()
  const [toggleFetch, setToggleFetch] = useState(false)
  
  useEffect(() => {

    const getPost = async () => {
      const postDetails = await getContent(id)
      setPost(postDetails)
      setLoaded(true)
    }

    getPost()
  }, [id])

  const handleSub = (e) => {
    e.preventDefault()
    deleteContent(post._id)
    props.setToggleFetch((curr) => !curr)
    history.push('/')
    
  }

  

  if (!isLoaded) {
    return <h1>NO POST FOUND</h1>
  }
  return (
    <Layout>
        <div>
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <img src={post.imgURL} width="300px" />
        <p>{post.post}</p>

        <button onClick={handleSub}>Delete</button>

       
    </  div>

      </Layout>
  )
}

export default PostDetail