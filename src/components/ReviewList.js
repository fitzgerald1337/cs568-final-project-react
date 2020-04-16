import React from 'react'
import Review from './Review'
import axios from 'axios'

const ReviewList = (props) => {
  
  axios.get('http://localhost:3000/comment')

  return (
    <div>
      {props.reviews.map((item) => {
        return (
          <div>
            {item.reviews.map((review) => {
              return (
                <Review review={review.review}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default ReviewList