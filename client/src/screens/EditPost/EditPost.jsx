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
    let { id } = props.match.params;
    const updated = await updateContent(id, content);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <div>
        <h3>Edit post</h3>
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
        </form>
      </div>
    </Layout>
  );
};

export default EditPost;
