import React, { useState, useEffect } from "react";
import { getUser } from "../api";
import { Link } from "react-router-dom";
import { SinglePost } from ".";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const { data } = await getUser();
    setUser(data);
  }, []);

  const { posts, messages, username } = user;

  return (
    <>
      <h2>Hello {username}!</h2>
      <h2>{username}'s posts: </h2>
      {posts
        ? posts.map((post) => {
            return post.active ? (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} />
              </Link>
            ) : null;
          })
        : null}

        <div>
            <h2>{username}'s messages:</h2>
            {messages ? messages.map(message=>
            <div key={message._id}>
                <h3>From: {message.fromUser.username}</h3>
                <h4>{message.post.title}</h4>
                <p>{message.content}</p>
            </div>
            ):null}
        </div>
    </>
  );
};

export default Profile;
