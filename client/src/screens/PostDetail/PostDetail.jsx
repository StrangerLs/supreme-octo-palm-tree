import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";

function PostDetail(props) {
  const [post, setPost] = useState(null);
  const { id } = useParams()
  // useEffect(() => {
  //   const foundProduct = 
  // })
  return (
    <div>
      <Layout>
        <h3>Post</h3>
      </Layout>
    </div>
  )
}

export default PostDetail