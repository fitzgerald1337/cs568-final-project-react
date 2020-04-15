import React from 'react'

const Review = (props) => {
  console.log(props.match.params.id)
  return (
    <div>
      <p>{props.review}</p>
    </div>
  )
}

export default Review