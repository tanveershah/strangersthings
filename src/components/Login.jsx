import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import {loginUser} from '../api'
import {addLocalUser} from '../auth'
import './Login.css'


const Login = ({setIsLoggedIn, setIsLoading}) => {

  const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

  return <div className="login">
  <h2>Welcome to Stranger's Things!</h2>
  <form id="login-form" onSubmit={async(event)=> {
    event.preventDefault()
    setIsLoading(true)
    try {
      const {data} = await loginUser(username, password)
      addLocalUser(data.token)
      setIsLoggedIn(true)
    } catch (error) {
      console.error(error.message)
    } finally{
      setIsLoading(false)
    }
  }}>
    <fieldset>
      <label className="login-button" htmlFor="username">User Name</label>
      <input className="login-form" id="username" type="text" placeholder="enter uesrname" value={username} onChange={(event)=>setUsername(event.target.value)} required/>
    </fieldset>
  <fieldset>
<label className="login-button" htmlFor="password">Password</label>
  <input className="login-form" id="password" type='password' placeholder='enter password' value={password} onChange={(event)=> setPassword(event.target.value)} required/>
  </fieldset>
  <button className="login-button" type='submit'>Login</button>
  <NavLink className="login-form" to="/register">Register new user</NavLink>
  </form>;
  </div>
};

export default Login;
