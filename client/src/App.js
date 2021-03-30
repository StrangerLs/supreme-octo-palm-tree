import "./App.css";
import { useState, React } from "react";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./screens/CreatePost/CreatePost";
import EditPost from "./screens/EditPost/EditPost";
import Home from "./screens/Home/Home";
import PostDetail from "./screens/PostDetail/PostDetail";

function App() {
  const [toggleFetch, setToggleFetch] = useState(false);
  return (
    <div className="App">
      <h2>hey</h2>
      <Switch>
        <Route exact path="/">
          <Home toggleFetch={toggleFetch}/>
        </Route>
        <Route exact path="/add-post">
          <CreatePost />
        </Route>
        <Route exact path="/posts/:id/edit">
          <EditPost />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail setToggleFetch={setToggleFetch}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
