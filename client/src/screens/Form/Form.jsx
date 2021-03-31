import React, { useEffect, useState } from "react";
import "./Form.css";
import Layout from "../../components/shared/Layout/Layout";
import { createContent, getContent, updateContent } from "../../services/contents";
import { useParams, Redirect } from 'react-router-dom'

function Form() {
  // isCreated and isUpdated will tell the handleSubmit whither the user shall be directed
  const [isCreated, setCreated] = useState("")
  const [isUpdated, setUpdated] = useState(false);
  
  // post will store the form input values
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    post: "",
  });

  // id will capture the id value from params in the case of editing a post
  let { id } = useParams();

  // Aforementioned id will trigger the component to get information about the post and fill out the form with this data
  useEffect(() => {
    const fetchContent = async () => {
      const content = await getContent(id);
      setPost(content);
    };
    fetchContent();
  }, [id]);

  // Whenever the user types within the form inputs, handleChange will trigger and update the state of post
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    // If there is an id, handleSubmit will update the existing post and change the state of isUpdated
    if (id) {
      const updated = await updateContent(id, post);
    setUpdated(updated);
    }
    // Otherwise, handleSubmit will create a new post to the api and update the value of isCreated
    else {
      const created = await createContent(post)
      setCreated({ created })
    }
  }

  // Redirect to Home if the new post was created
  if (isCreated) {
    return <Redirect to={`/`} />
  }
  
  // Redirect to postDetail screen if a post was updated
  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />
  }

  return (
    <div>
      <Layout>
        <h3>Create Post Here</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" name="title" value={post.title} onChange={handleChange} placeholder="title" className="title-input"/>
          <input type="text" name="author" value={post.author} onChange={handleChange} placeholder="author" className="author-input"/>
          <input type="text" name="imgURL" value={post.imgURL} onChange={handleChange} placeholder="image URL" className="img-input"/>
          <textarea name="post" value={post.post} onChange={handleChange} placeholder="write your thoughts here..." rows="6" className="post-input"/>
          <button type="submit" className="submit-button">submit</button>
        </form>
      </Layout>
    </div>
  );
}

export default Form;
