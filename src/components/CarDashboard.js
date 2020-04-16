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
import SignupForm from './SignupForm'


const CarDashboard = () => {
  const myJwt = window.sessionStorage.getItem('jwt')

  const [state, setState] = useState({ data: [] })

  useEffect(() => {
    axios.get(`http://localhost:3000/user/car?secret_token=${myJwt}`)
      .then(res => {
        setState(res)
      })
  }, [])


  return (
    <div>
      <Router>
        <Switch>
          <Route path='/dashboard' exact>
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
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/signup' exact>
            <SignupForm />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}

export default CarDashboard
