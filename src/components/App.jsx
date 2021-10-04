import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header, Footer, Login, Register, AddPost, Profile, Posts, Search, SinglePostView} from ".";
import "./App.css";
import { removeLocalUser, getToken } from "../auth";
import { getPosts } from "../api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [willDeliver, setDeliver]=useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription]=useState('')
  const [price, setPrice]=useState('')
  const [location, setLocation]=useState('')

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
            <SinglePostView 
            posts={posts}
            setPosts={setPosts}
            setIsLoading={setIsLoading}
            willDeliver={willDeliver}
            setDeliver={setDeliver}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            location={location}
            setLocation={setLocation}
            />
          </Route>
          <Route exact path="/">
            <Search posts={posts} setPosts={setPosts}/>
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
<AddPost 
posts={posts} 
setPosts={setPosts} 
setIsLoading={setIsLoading} 
willDeliver={willDeliver}
setDeliver={setDeliver}
title={title}
setTitle={setTitle}
description={description}
setDescription={setDescription}
price={price}
setPrice={setPrice}
location={location}
setLocation={setLocation}
/>
          </Route>
  
          <Route path="/profile">
            <Profile/>

          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
