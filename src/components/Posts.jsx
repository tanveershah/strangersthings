import React, {useEffect} from "react";
import './Posts.css'
import { getPosts } from "../api";

const Posts = ({ posts, setPosts }) => {

  useEffect(async () => {
    try {
      const {
        data: { posts },
      } = await getPosts();
      setPosts(posts);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return <>{posts ? posts.map((post) => <div className="post" key={post._id}>
    <h3>Title: {post.title}</h3>
    <p>Description: {post.description}</p>
    <p>Price: <strong>{post.price}</strong></p>
  </div>) : null}</>;
};

export default Posts;
