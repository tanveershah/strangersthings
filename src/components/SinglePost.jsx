import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {updatePost, createMessage, getUser, deletePost} from '../api'

const SinglePost = ({post,setIsLoading, posts, setPosts, willDeliver, setDeliver, title, setTitle, description, setDescription, price, setPrice, location, setLocation}) => {
    const history = useHistory()
    
    const [user, setUser]=useState({})

    useEffect(async()=>{
        try {
            
            const {data}=await getUser()
            setUser(data)
        } catch (error) {
            console.error(error.message)
        }
    }, [])

    const [content, setContent]= useState('')
    const [isActive, setActive] = useState(false)
    const [deleteActive, setDeleteActive]=useState(false)

    const editToggle=()=> setActive(!isActive)
    const deleteToggle=()=>setDeleteActive(!deleteActive)

    const {postId} = useParams()

    if (postId && post.author._id !== user._id) {
        return <>
        <h3>{post.title}</h3>
    <p>{post.description}</p>

    <form id="message" 
    onSubmit={async(event)=>{
        event.preventDefault()
        setIsLoading(true)

        try {
            const message = await createMessage(post._id, content)
            return message
        } catch (error) {
            console.error(error.message)
        } finally{
            setIsLoading(false)
            setContent('')
        }
    }} >

<fieldset>
    <label>Message to the seller</label>
    <input 
    id={post._id} 
    type="text"
    value={content}
    onChange={event=>setContent(event.target.value)}
    />
</fieldset>
<button type="submit">Send</button>
    </form>
        </>
    } else if (postId && post.author._id === user._id) {
        return <>
        <h3>{post.title}</h3>
    <p>{post.description}</p>

    <button onClick={event=>{
        event.preventDefault()
        deletePost(postId)
        history.push("/")
    }}>Delete</button>

    <form id="update" onSubmit={async event=>{
        event.preventDefault()
        setIsLoading(true)

        try {
            const {data}=await updatePost(title, description, price, location, willDeliver, postId)
            setPosts([...posts, data.post])
        } catch (error) {
            console.error(error.message)
        } finally {
            setIsLoading(false)
            history.push('/profile')
        }
    }}>

<fieldset>
    <label htmlFor="title">Title</label>
    <input 
    id="title" type="text"
    placeholder={post.title}
    value={title}
    onChange={event=>setTitle(event.target.value)}
     />
    
</fieldset>
<fieldset>
    <label htmlFor="description">description</label>
    <input 
    id="description" type="text"
    placeholder={post.description}
    value={description}
    onChange={event=>setDescription(event.target.value)}
     />
    
</fieldset>
<fieldset>
    <label htmlFor="price">Price: $</label>
    <input 
    id="price" type="text"
    placeholder={post.price}
    value={price}
    onChange={event=>setPrice(event.target.value)}
     />
    
</fieldset>
<fieldset>
    <label htmlFor="location">Location</label>
    <input 
    id="location" type="text"
    placeholder={post.location}
    value={location}
    onChange={event=>setLocation(event.target.value)}
     />
    
</fieldset>
<fieldset>
    <label htmlFor="willDeliver">Will Deliver?</label>
    <input 
    id="willDeliver" type="checkbox"
    value={willDeliver}
    onChange={event=>setDeliver(!willDeliver)}
     />
    
</fieldset>
<button type="submit">submit</button>
    </form>
        </>
    } else {
        return <>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        </>
    }
}

export default SinglePost