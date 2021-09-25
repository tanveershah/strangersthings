import React from 'react'
import {useParams} from 'react-router-dom'
import {SinglePost} from '../components'

const SinglePostView =({posts}) =>{
    const {postId}=useParams()
    const postFound =posts.find(post=>post._id===postId)

    if(!postFound){
        return <div>
            <h3>No post found with id {postId}</h3>
        </div>
    }

    return <SinglePost post={postFound}/>
}

export default SinglePostView