import React, { useState, useEffect } from "react";
import { Posts } from ".";

const Search = ({ posts, setPosts }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [postsToDisplay, setPostsToDisplay] = useState("");

  useEffect(() => {
    setPostsToDisplay(posts);
  }, [posts]);

  const postMatch = (post, title, price, location) => {
    if (title.length && post.title.includes(title)) {
      return true;
    } else if (location.length && post.location.includes(location)) {
      return true;
    } else if (price.length && post.price.includes(price)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <h3>Search</h3>
      <form
        id="search"
        onSubmit={(event) => {
          event.preventDefault();

          let matchedPosts = posts.filter((post) =>
            postMatch(post, postTitle, postPrice, postLocation)
          );

          if(postTitle.length || postPrice.length || postLocation.length) {
              setPostsToDisplay(matchedPosts)
          } else {
              setPostsToDisplay(posts)
          }
        }}
      >
          <fieldset>
              <label htmlFor="postTitle">Title</label>
              <input id="postTitle" 
              type="text" 
              value={postTitle} 
              placeholder="Post Title"
              onChange={event=>setPostTitle(event.target.value)}
              />
          </fieldset>

          <fieldset>
              <label htmlFor="postPrice">Price</label>
              <input id="postPrice" 
              type="text" 
              value={postPrice} 
              placeholder="Post Price"
              onChange={event=>setPostPrice(event.target.value)}
              />
          </fieldset>

          <fieldset>
              <label htmlFor="postLocation">Location</label>
              <input id="postLocation" 
              type="text" 
              value={postLocation} 
              placeholder="Post Location"
              onChange={event=>setPostLocation(event.target.value)}
              />
          </fieldset>

          <button type="submit">Search</button>
      </form>

      <Posts posts={postsToDisplay} setPosts={setPosts} />
    </>
  );
};

export default Search;
