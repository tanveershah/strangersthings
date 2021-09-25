import React, { useState, useEffect } from "react";
import {Route, Switch, Redirect, NavLink} from 'react-router-dom'
import { Header, Footer } from "../components";
import "./App.css";
import Posts from "./Posts";
import {removeLocalUser, getToken} from '../auth'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const [isLoading, setIsLoading]=useState(false)

  useEffect(()=>{
    if(getToken()) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="container">
      <Header isLoggedIn={isLoggedIn}/>
      <div className="main">
        <Posts 
        posts={posts}
        setPosts={setPosts}/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
