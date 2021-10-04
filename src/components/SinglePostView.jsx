import React from 'react'
import {useParams} from 'react-router-dom'
import {SinglePost} from '.'

const SinglePostView =({posts, setPosts, setIsLoading, willDeliver, setDeliver, title, setTitle, description, setDescription, price, setPrice, location,setLocation}) =>{
    const {postId}=useParams()
    const postFound =posts.find(post=>post._id===postId)

    if(!postFound){
        return <div>
            <h3>No post found with id {postId}</h3>
        </div>
    }

    return <SinglePost 
    post={postFound}
    setIsLoading={setIsLoading}
    posts={posts}
    setPosts={setPosts}
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
}

export default SinglePostView