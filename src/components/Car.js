import React from 'react'

const Car = (props) => {

  return (
    <div>
      <h5>
        {props.year} {props.make} {props.model}
      </h5>
      <h6>
        {props.price}
      </h6>
      <p>
        {props.description}
      </p>
      <button>LEAVE A REVIEW</button>
      <button>SEE ALL REVIEWS</button>
    </div>
  )
}

export default Car