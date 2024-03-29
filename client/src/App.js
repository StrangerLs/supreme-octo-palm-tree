import "./App.css";
import { useState, React } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./screens/Form/Form";
import Home from "./screens/Home/Home";
import PostDetail from "./screens/PostDetail/PostDetail";

function App() {
  const [toggleFetch, setToggleFetch] = useState(false);
  return (
    <div className="App">
      <h2 style={{ color: "#ABB79C", fontSize:"40px" }}>hey</h2>
      <Switch>
        <Route exact path="/">
          <Home toggleFetch={toggleFetch}/>
        </Route>
        <Route exact path="/add-post">
          <Form />
        </Route>
        <Route exact path="/posts/:id/edit">
          <Form />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail setToggleFetch={setToggleFetch}/>
        </Route>
      </Switch>2

    </div>
  );
}

export default App;
