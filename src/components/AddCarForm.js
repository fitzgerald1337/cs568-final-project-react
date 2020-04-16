import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'

const AddCarForm = () => {

  const myJwt = window.sessionStorage.getItem('jwt')
  const history = useHistory()

  const { value: make, bind: bindMake, reset: resetMake } = useForm('')
  const { value: model, bind: bindModel, reset: resetModel } = useForm('')
  const { value: price, bind: bindPrice, reset: resetPrice } = useForm('')
  const { value: year, bind: bindYear, reset: resetYear } = useForm('')
  const { value: description, bind: bindDescription, reset: resetDescription } = useForm('')
  const { value: image, bind: bindImage, reset: resetImage } = useForm('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3000/user/car?secret_token=${myJwt}`, {
      'make': make,
      'model': model,
      'price': price,
      'year': year,
      'description': description,
      'image': image
    })
      .then(res => {
        if (res) {
          history.push('/')
        }
      })
      .catch(err => {
        console.log(err)
        alert('Something went wrong. Try again.')
      })
    resetMake()
    resetModel()
    resetPrice()
    resetYear()
    resetDescription()
    resetImage()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Make:
        <input
          type='text' {...bindMake} />
      </label>
      <label>
        Model:
        <input
          type='text' {...bindModel} />
      </label>
      <label>
        Price:
        <input
          type='text' {...bindPrice} />
      </label>
      <label>
        Year:
        <input
          type='text' {...bindYear} />
      </label>
      <label>
        Description:
        <input
          type='text' {...bindDescription} />
      </label>
      <label>
        Image:
        <input
          type='text' {...bindImage} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddCarForm