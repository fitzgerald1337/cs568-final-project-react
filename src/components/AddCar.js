import React from 'react'
import AddCarForm from './AddCarForm'

// const AddCar = () => {
//   const myJwt = window.sessionStorage.getItem('jwt')
//   console.log(myJwt)
//   let history = useHistory()


//   const myAddCar = () => {
//     axios.post(`http://localhost:3000/user/car?secret_token=${myJwt}`)
//       .then(res => {
//         console.log(res)
//         history.push('/')
//       })
//   }

//   const { handleSubmit, handleInputChange, inputs } = useForm(myAddCar)

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label for='make'>Make:</label>
//         <input type='text' name='make' onChange={handleInputChange} value={inputs.make} placeholder='Ex: Toyota' />
//         <label for='model'>Model:</label>
//         <input type='text' name='model' onChange={handleInputChange} value={inputs.model} placeholder='Ex: Camry' />
//         <label for='price'>Price:</label>
//         <input type='number' name='price' onChange={handleInputChange} value={inputs.price} placeholder='Ex: 1000' />
//         <label for='year'>Year:</label>
//         <input type='number' name='year' onChange={handleInputChange} value={inputs.year} placeholder='Ex: 2001' />
//         <label for='image'>Image URL:</label>
//         <input type='text' name='imageURL' onChange={handleInputChange} value={inputs.imageURL} required />
//         <button type='submit'>ADD NEW CAR</button>
//       </form>
//     </div>
//   )
// }

const AddCar = () => {
  return (
    <div>
      <AddCarForm />
    </div>
  )
}

export default AddCar