import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./screens/CreatePost/CreatePost";
import EditPost from "./screens/EditPost/EditPost";
import Home from "./screens/Home/Home";
import PostDetail from "./screens/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <h2>hey</h2>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-post" component={CreatePost} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/products/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
