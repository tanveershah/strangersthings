import React, {useState} from 'react'
import {addPost} from '../api'
import './Login.css'

const AddPost= ({posts, setPosts, setIsLoading, willDeliver, setDeliver, title, setTitle, description, setDescription, price, setPrice, location, setLocation})=>{

    return <div className="login">
    <h2>Sell a thing</h2>
    <form id="addPost"  onSubmit={async(event)=>{
        event.preventDefault()
        setIsLoading(true)

        try {
            const {data}=await addPost(title, description, price, location, willDeliver)
            
            setPosts([...posts, data.post])
        } catch (error) {
            console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }}>

        <fieldset>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" placeholder="title" value={title} onChange={event=> setTitle(event.target.value)} required />
        </fieldset>
        <fieldset>
        <label htmlFor="description">Description</label>
            <input id="description" type="text" placeholder="description" value={description} onChange={event=> setDescription(event.target.value)} required />
        </fieldset>
        <fieldset>
            <label htmlFor="price">Price</label>
            <input id="price" type="text" placeholder="price" value={price} onChange={event=> setPrice(event.target.value)} required />
        </fieldset>
        <fieldset>
            <label htmlFor="location">Location</label>
            <input id="location" type="text" placeholder="location" value={location} onChange={event=> setLocation(event.target.value)} required />
        </fieldset>
        <fieldset>
            <label htmlFor="willDeliver">Willing to Deliver</label>
            <input id="willDeliver" type="checkbox" value={willDeliver} onChange={event=> setDeliver(!willDeliver)} />
        </fieldset>

        <button type="submit">Add Post</button>
    </form>
    </div>
}

export default AddPost
