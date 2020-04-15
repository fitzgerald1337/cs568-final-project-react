import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import SearchBar from './SearchBar'
import CarTable from './CarTable'
import AddCar from './AddCar'
import ReviewList from './ReviewList'
import AddReview from './AddReview'
import Login from './Login'


const CarDashboard = () => {

  const [state, setState] = useState({ data: [] })

  useEffect(() => {
    axios.post('http://localhost:3000/login', {
      'email': 'fitzgerald1337@gmail.com',
      'password': 'abcd1234'
    })
      .then(res => {
        return axios.get(`http://localhost:3000/user/car?secret_token=${res.data.token}`)
      })
      .then(res => {
        setState(res)
      })
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
            {/*
            <SearchBar />
            */}
            <CarTable cars={state.data} />
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
          {/*
          <Route path='/login' exact>
            <Login />
          </Route>
          */}
        </Switch>
      </Router>
    </div>
  )

}

export default CarDashboard
