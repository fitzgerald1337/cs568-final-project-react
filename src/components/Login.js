import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Welcome to Our Car Review Site</h1>
      <LoginForm />
      <h4>Don't have an account?</h4>
      <Link to='/signup'>
        <button>SIGN UP HERE</button>
      </Link>
    </div>
  )
}

export default Login