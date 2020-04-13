import React from 'react'

const SearchBar = () => {

  const onTextChange = (event) => {
    // call the server based on input text
    console.log(event)
  }

  return (
    <div>
      <input type='text' placeholder='Search' onChange={(event) => { onTextChange(event) }} />
    </div>
  )
}

export default SearchBar