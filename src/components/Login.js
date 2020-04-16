import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'

const Login = () => {

  let history = useHistory()

  const myLogin = () => {
    axios.post('http://localhost:3000/login', {
      'email': inputs.email,
      'password': inputs.password
    })
      .then(res => {
        if (res.data.token) {
          window.sessionStorage.setItem('jwt', res.data.token)
          history.push('/')
        }
      })
      .catch(err => {
        console.log(err)
        alert('Email or password not correct.')
      })
  }

  const { handleSubmit, handleInputChange, inputs } = useForm(myLogin)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for='email'>Email:</label>
        <input type='text' name='email' onChange={handleInputChange} value={inputs.email} required />
        <label for='password'>Password:</label>
        <input type='password' name='password' onChange={handleInputChange} value={inputs.password} required />
      </div>
      <button type='submit'>LOGIN</button>
    </form>
  )
}

export default Login