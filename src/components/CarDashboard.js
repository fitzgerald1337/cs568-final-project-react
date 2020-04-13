import React, { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import CarTable from './CarTable'

const CarDashboard = () => {

  const [state, setState] = useState({
    cars: [
      {
        carId: 1,
        make: 'Toyota',
        model: 'Corolla',
        year: '2001',
        price: '$1,000',
        description: 'Old beater car. Reliable but not stylish at all.'
      },
      {
        carId: 2,
        make: 'BMW',
        model: '528i',
        year: '1999',
        price: '$1,500',
        description: 'Classic vintage car with a modern, luxurious feel.'
      },
      {
        carId: 3,
        make: 'Porsche',
        model: '911',
        year: '2020',
        price: '$98,000',
        description: 'High-performance, rear-engined sports car. Iconic.'
      }
    ],
    reviews: [
      {
        carId: 1,
        reviews: [
          {
            userId: 1,
            review: 'Here is a sample review about the 2001 Toyota Corolla.'
          },
          {
            userId: 2,
            review: 'Here is a second review about the 2001 Toyota Corolla.'
          }
        ]
      },
      {
        carId: 2,
        reviews: [
          {
            userId: 1,
            review: 'Here is a sample review about the BMW 528i.'
          },
          {
            userId: 2,
            review: 'Here is a second review about the BMW 528i.'
          }
        ]
      },
      {
        carId: 3,
        reviews: [
          {
            userId: 1,
            review: 'Here is a sample review about the Porsche 911.'
          },
          {
            userId: 2,
            review: 'Here is a second review about the Porsche 911.'
          }
        ]
      }
    ]
  })

  return (
    <div>
      <Header />
      <button>ADD NEW CAR</button>
      <SearchBar />
      <CarTable cars={state.cars} />
    </div>
  )

}

export default CarDashboard
