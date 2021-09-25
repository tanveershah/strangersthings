import React from "react";
import "./Posts.css";
import { Link } from "react-router-dom";
import {SinglePost} from '../components'

const Posts = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      {posts.length
        ? posts.map((post) => (
          <Link to={`/posts/${post._id}`} key={post._id} className="post">
              <SinglePost post={post}/>
            </Link>
          ))
        : null}
    </>
  );
};

export default Posts;
