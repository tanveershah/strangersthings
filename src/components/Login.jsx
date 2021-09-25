import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [confirmPasword, setConfirmPassword] = useState('')

const handleSubmit  = async (event) => {
  event.preventDefault()
  console.log('username, password: ', username, password)
}

  return <>
  <h3>Login</h3>
  <form onSubmit={handleSubmit}>
  <input type='text' placeholder='user name' value={username} onChange={(event)=> setUsername(event.target.value)}></input>
  <input type='text' placeholder='password' value={password} onChange={(event)=> setPassword(event.target.value)}></input>
  <button type='submit'></button>
  </form>;
  </>
};

export default Login;
