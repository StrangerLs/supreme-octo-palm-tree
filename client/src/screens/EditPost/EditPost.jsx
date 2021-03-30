import React, { useEffect, useState } from "react";
import "./EditPost.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getContent, updateContent } from "../../services/contents";

const EditPost = (props) => {
  const [content, setContent] = useState({
    title: "",
    author: "",
    imgURL: "",
    post: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchContent = async () => {
      const content = await getContent(id);
      setContent(content);
    };
    fetchContent();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // id = props.match;
    // console.log(id)
    const updated = await updateContent(id, content);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />
  }

  return (
    <Layout>
      <div>
        {/* <h3>Edit post</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={content.title}
            autoFocus
            onChange={handleChange}
            placeholder="title"
          />
          <input
            type="text"
            name="author"
            value={content.author}
            autoFocus
            onChange={handleChange}
            placeholder="author"
          />
          <input
            type="text"
            name="imgURL"
            value={content.imgURL}
            autoFocusonChange={handleChange}
            placeholder="imgURL"
          />
          <input
            type="text"
            name="post"
            value={content.post}
            autoFocus
            onChange={handleChange}
            placeholder="post"
          />
          <button type="submit">submit</button>
        </form> */}
              <h3>Edit Post Here</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" name="title" value={content.title} onChange={handleChange} placeholder="title" className="title-input"/>
          <input type="text" name="author" value={content.author} onChange={handleChange} placeholder="author" className="author-input"/>
          <input type="text" name="imgURL" value={content.imgURL} onChange={handleChange} placeholder="image URL" className="img-input"/>
          <textarea name="post" value={content.post} onChange={handleChange} placeholder="edit your thoughts here..." rows="6" className="post-input"/>
          <button type="submit" className="submit-button">submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default EditPost;
