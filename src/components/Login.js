import React from 'react'

const Login = () => {
  
  return (
    <div>
      <label for='user'>User</label>
      <input type='text' name='user' />
      <label for='password'>Password</label>
      <input type='password' name='password' />
    </div>
  )
}

export default Login