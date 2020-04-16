import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'


const SignupForm = () => {

  const history = useHistory()

  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useForm('')
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useForm('')
  const { value: email, bind: bindEmail, reset: resetEmail } = useForm('')
  const { value: password, bind: bindPassword, reset: resetPassword } = useForm('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/signup', {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'password': password
    })
      .then(res => {
        console.log(res)
        if (res.data.user._id) {
          alert('User created successfully.')
          history.push('/')
        }
      })
      .catch(err => {
        console.log(err)
        alert('User signup unsuccessful. Please try again.')
      })
    resetFirstName()
    resetLastName()
    resetEmail()
    resetPassword()
  }

  return (
    <div>
    <h2>Enter your information below.</h2>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type='text' {...bindFirstName} />
      </label>
      <label>
        Last Name:
        <input
          type='text' {...bindLastName} />
      </label>
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
    </div>
  )
}

export default SignupForm