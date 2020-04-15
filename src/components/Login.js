import React, { useState } from 'react'
import useForm from '../hooks/useForm'

const Login = () => {

  const myLogin = () => {
    alert('Hello!')
  }
  const { handleSubmit, handleInputChange, inputs } = useForm(myLogin) 

  return (
    <form onSubmit={() => {handleSubmit()}}>
      <div>
        <label for='user'>User</label>
        <input type='text' name='email' onChange={() => {handleInputChange()}} value={inputs.email} required />
        <label for='password'>Password</label>
        <input type='password' name='password' onChange={() => {handleInputChange()}} value={inputs.password} required />
      </div>
      <button type='submit'>LOGIN</button>
    </form>
  )
}

export default Login