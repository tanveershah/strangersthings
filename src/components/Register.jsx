import React, {useState} from 'react'
import {registerUser} from '../api'
import {addLocalUser} from '../auth'

const Register = ({setIsLoggedIn, setIsLoading}) => {
    const [usernmae, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')

    return <>
    <form id="register" onSubmit={async(event)=>{
        event.preventDefault()
        setIsLoading(true)

        try {
            if(password===confirmPassword){
                const {data}= await registerUser(usernmae, password)
                addLocalUser(data.token)
                setIsLoggedIn(true)
            } else {
                const msgLabel = document.getElementById('errLabel')
                msgLabel.textContent += "Passwords do not match..."
            }
        } catch (error) {
            console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }}>
    <label id="errLabel"></label>
    <fieldset>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" placeholder="enter username" value={usernmae} onChange={(event)=> setUsername(event.target.value)} required />
    </fieldset>
    <fieldset>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="enter password" value={password} onChange={(event)=> setPassword(event.target.value)} required />
    </fieldset>
    <fieldset>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input id="confirm-password" type="password" placeholder="confirm password" value={confirmPassword} onChange={(event)=> setConfirmPassword(event.target.value)} required />
    </fieldset>

    <button type="submit">Submit</button>
    </form>
    </>
}

export default Register