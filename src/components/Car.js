import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link to={'/leave-review/' + props.id}>
        <button>LEAVE A REVIEW</button>
      </Link>
      <Link to={'/see-all-reviews/' + props.id}>
        <button>SEE ALL REVIEWS</button>
      </Link>
    </div >
  )
}

export default Car