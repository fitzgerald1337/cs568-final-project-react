import React from 'react'

const AddCar = (props) => {
  return (
    <div>
      <label for='make'>Make:</label>
      <input type='text' name='make' placeholder='Ex: Toyota'></input>
      <label for='model'>Model:</label>
      <input type='text' name='model' placeholder='Ex: Camry'></input>
    </div>
  )
}

export default AddCar