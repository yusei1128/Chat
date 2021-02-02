import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthService'

import firebase from '../config/firebase'
import {Redirect} from 'react-router-dom'


const Login = ({history}) => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const user = useContext(AuthContext)

  const handleSubmit = e => {
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(() => {
          history.push("/")
      })
      .catch(err => {
         console.log(err) 
      })

      if (user) {
         return <Redirect to= "/" />
      }
  }
  
    return (
      <>
    <h1>Login</h1>
    <form onSubmit = {handleSubmit}>
        <div>
         <label htmlFor ='email'>E-mail</label>
         <input
          type = 'email'
          id = 'email'
          name = 'email'
          placeholder = 'Email'
          onChange = {e => {setEmail(e.target.value)}}
          />
        </div>
        <div>
            <label htmlFor = 'password'>Password</label>
            <input
             type = 'password'
             id = 'password'
             name = 'password'
             placeholder = 'Password'
             onChange = {e =>{setPassword(e.target.value)}}
             />
        </div>
        <button type = 'submit'>Login</button>
    </form>
      </>
    )
}

export default Login 