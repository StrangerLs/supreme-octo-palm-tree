import React, { useState } from "react";
import "./CreatePost.css";
import Layout from "../../components/shared/Layout/Layout";
// import e from "cors";
import { Redirect } from 'react-router-dom'

function CreatePost(props) {
  console.log(props.posts)
  const [created, setCreated] = useState("")

  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    post: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const created = props.setPosts([...props.posts, newPost])
    setCreated({ created })
  }

  if (created) {
    return <Redirect to={`/`} />
}

  return (
    <div>
      <Layout>
        <h3>Create Post Here</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="title"/>
          <input type="text" name="author" value={newPost.author} onChange={handleChange} placeholder="author"/>
          <input type="text" name="imgURL" value={newPost.imgURL} onChange={handleChange} placeholder="imgURL"/>
          <input type="text" name="post" value={newPost.post} onChange={handleChange} placeholder="post"/>
          <button type="submit">submit</button>
        </form>
      </Layout>
    </div>
  );
}

export default CreatePost;
