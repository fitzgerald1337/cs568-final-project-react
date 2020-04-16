import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'

const AddReviewForm = () => {

  const myJwt = window.sessionStorage.getItem('jwt')
  const myWriter = window.sessionStorage.getItem('writer')
  const history = useHistory()
  const { id } = useParams()

  const { value: review, bind: bindReview, reset: resetReview } = useForm('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3000/user/comment?secret_token=${myJwt}`, {
      'writer': myWriter,
      'carId': id,
      'content': review
    })
      .then(res => {
        if (res) {
          alert('Review saved successfully.')
          history.push('/dashboard')
        }
      })
      .catch(err => {
        console.log(err)
        alert('Something went wrong. Try again.')
      })
    resetReview()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Leave a review:
        <input
          type='textarea' {...bindReview} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddReviewForm