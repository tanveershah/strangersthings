import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import { Header, Footer, Login, Register, AddPost, Profile, Posts, SinglePost, SinglePostView } from "../components";
import "./App.css";
import { removeLocalUser, getToken } from "../auth";
import { addPost, getPosts } from "../api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    getPosts(setPosts)
  }, [])

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="container">
      <Header isLoggedIn={isLoggedIn} />
      <div className="main">
        <Switch>
          <Route path="/posts/:postId">
            <SinglePostView posts={posts}/>
          </Route>
          <Route exact path="/">
            <Posts posts={posts} setPosts={setPosts}/>
          </Route>
          <Route path="/posts">
            <Posts posts={posts} />
          </Route>
          <Route path="/login">
            <Login setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn}/>
          </Route>
          <Route path="/register">
            <Register setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/addPost">
<addPost posts={posts} setPosts={setPosts} setIsLoading={setIsLoading} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
