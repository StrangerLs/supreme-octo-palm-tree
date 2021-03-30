import React, { useState } from "react";
import "./CreatePost.css";
import Layout from "../../components/shared/Layout/Layout";
import { createContent } from "../../services/contents";
import { Redirect } from 'react-router-dom'

function CreatePost() {
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createContent(newPost)
    setCreated({ created })
  }

  if (created) {
    return <Redirect to={`/`} />
}

  return (
    <div>
      <Layout>
        <h3>Create Post Here</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="title" className="title-input"/>
          <input type="text" name="author" value={newPost.author} onChange={handleChange} placeholder="author" className="author-input"/>
          <input type="text" name="imgURL" value={newPost.imgURL} onChange={handleChange} placeholder="image URL" className="img-input"/>
          <textarea name="post" value={newPost.post} onChange={handleChange} placeholder="write your thoughts here..." rows="6" className="post-input"/>
          <button type="submit" className="submit-button">submit</button>
        </form>
      </Layout>
    </div>
  );
}

export default CreatePost;
