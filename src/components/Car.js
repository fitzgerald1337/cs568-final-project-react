import React from 'react'
import { Link } from 'react-router-dom'

const Car = (props) => {

  return (
    <div>

      <h3>
        {props.year} {props.make} {props.model}
      </h3>
      <h5>
        {'$' + props.price}
      </h5>
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