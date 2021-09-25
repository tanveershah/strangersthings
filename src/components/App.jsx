import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import { Header, Footer } from "../components";
import "./App.css";
import Posts from "./Posts";
import { removeLocalUser, getToken } from "../auth";
import Login from "./Login";
import { getPosts } from "../api";

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
          <Route exact path="/">
            <Posts posts={posts} setPosts={setPosts}/>
          </Route>
          <Route path="/posts">
            <Posts posts={posts} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
