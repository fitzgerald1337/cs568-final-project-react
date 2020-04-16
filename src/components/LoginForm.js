import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'

const LoginForm = () => {

  const history = useHistory()

  const { value: email, bind: bindEmail, reset: resetEmail } = useForm('')
  const { value: password, bind: bindPassword, reset: resetPassword } = useForm('')
  

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/login', {
      'email': email,
      'password': password
    })
      .then(res => {
        console.log(res)
        if (res.data.token) {
          window.sessionStorage.setItem('jwt', res.data.token)
          window.sessionStorage.setItem('writer', res.data.body._id)
          history.push('/')
        }
      })
      .catch(err => {
        console.log(err)
        alert('Email or password not correct.')
      })
    resetEmail()
    resetPassword()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type='text' {...bindEmail} />
      </label>
      <label>
        Password:
        <input
          type='password' {...bindPassword} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default LoginForm