import "./App.css";
import { useState, React } from "react";
import { Route, Switch } from "react-router-dom";
import postData from "./data.js"
import CreatePost from "./screens/CreatePost/CreatePost";
import EditPost from "./screens/EditPost/EditPost";
import Home from "./screens/Home/Home";
import PostDetail from "./screens/PostDetail/PostDetail";

function App() {
  const [posts, setPosts] = useState(postData);
  const [toggleFetch, setToggleFetch] = useState(false);
  return (
    <div className="App">
      <h2>hey</h2>
      <Switch>
        <Route exact path="/">
          <Home posts={posts} setPosts={setPosts} toggleFetch={toggleFetch} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route exact path="/add-post">
          <CreatePost posts={posts} setPosts={setPosts} toggleFetch={toggleFetch} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route exact path="/posts/:id/edit">
          <EditPost posts={posts} setPosts={setPosts} toggleFetch={toggleFetch} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail posts={posts} setPosts={setPosts} toggleFetch={toggleFetch} setToggleFetch={setToggleFetch}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
