import React, {useState, useEffect} from 'react'
import {getUser} from '../api'

const Profile = () =>{
    const [user, setUser] =useState({})

    useEffect(async()=>{
        const {data}= await getUser()
        setUser(data)
    }, [])

    const {posts, messages, username} = user

    return <>
    <h2>Hello {username}!</h2>
    <h2>{username}'s posts: </h2>
    {posts.length? posts.map(post=>
        <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
        ) :null}

        <h2>{username}'s messages:</h2>
        {messages.length? messages.map(message=>
            <div key={message._id}>
                <h2>From: {message.fromUser.username}</h2>
                <h3>{message.post.title}</h3>
                <p>{message.content}</p>
            </div>
            )  :null}
    </>
}

export default Profile