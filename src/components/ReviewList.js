import React, { useState, useEffect } from 'react'
import Review from './Review'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ReviewList = (props) => {

  const myJwt = window.sessionStorage.getItem('jwt')
  const [state, setState] = useState({ data: [] })
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/user/comment/${id}?secret_token=${myJwt}`)
      .then(res => {
        setState(res)
      })
  }, [])

  console.log(state)

  return (
    <div>
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