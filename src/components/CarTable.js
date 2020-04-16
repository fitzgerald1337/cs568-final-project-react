import React, { useState } from 'react'
import Car from './Car'

const CarTable = (props) => {
  
  return (
    <div>
      {props.cars.map((item) => {
        return (
          <Car
            key={item._id}
            id={item._id}
            make={item.make}
            model={item.model}
            year={item.year}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        )
      })}
    </div>
  )
}

export default CarTable