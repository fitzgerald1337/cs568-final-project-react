import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import SearchBar from './SearchBar'
import CarTable from './CarTable'
import AddCar from './AddCar'
import ReviewList from './ReviewList'
import AddReview from './AddReview'


const CarDashboard = () => {

  // axios.get()

  //setState with axios data

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
  })

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Header />
            <Link to='/add-new-car'>
              <button>ADD NEW CAR</button>
            </Link>
            <SearchBar />
            <CarTable cars={state.cars} />
          </Route>
          <Route path='/add-new-car' exact>
            <AddCar />
          </Route>
          <Route path='/see-all-reviews/:id' exact>
            <ReviewList />
          </Route>
          <Route path='/leave-review/:id' exact>
            <AddReview />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}

export default CarDashboard
