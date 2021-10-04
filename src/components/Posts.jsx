import React from "react";
import "./Posts.css";
import { Link } from "react-router-dom";
import {SinglePost} from '.'

const Posts = ({ posts }) => {
  return (
    <>
      {posts.length
        ? posts.map((post) => {
          return post.active ? <Link to={`/posts/${post._id}`} key={post._id} className="post">
              <SinglePost post={post} />
            </Link> : null
        })
        : null}
    </>
  );
};

export default Posts;
