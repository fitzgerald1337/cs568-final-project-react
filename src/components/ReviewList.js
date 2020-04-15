import React from 'react'
import Review from './Review'

const ReviewList = (props) => {
  
  //fetch reviews for car
  //lifecycle hook

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