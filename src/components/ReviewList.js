import React, { useState, useEffect } from 'react'
import Review from './Review'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ReviewList = (props) => {

  const myJwt = window.sessionStorage.getItem('jwt')
  const [state, setState] = useState({ data: [] })
  const [descendingBool, setDescendingBool] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/user/comment/${id}?secret_token=${myJwt}`)
      .then(res => {
        setState(res)
      })
  }, [])

  const toggleDescending = () => {
    setDescendingBool(!descendingBool)
    setState({ data: state.data.slice().reverse() })
  }

  useEffect(() => {
    localStorage.setItem("use-descending", descendingBool)
  }, [descendingBool])

  return (
    <div>
      <button onClick={() => toggleDescending()}>TOGGLE ASCENDING/DESCENDING</button>
      {state.data.map((item, index) => {
        return (
          <Review 
            key={index}
            review={item}
          />
        )
      })}
    </div>
  )
}

export default ReviewList