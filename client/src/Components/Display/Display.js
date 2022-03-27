import React from 'react'

const Display = ({ data, isLoading }) => {
  return (
    isLoading ? <p>is Loading...</p> :
      <>
        <h3>{data.name}</h3>
        <h3>{data.description}</h3>
        <img
          src={data.image}
          alt="" />
      </>
  )
}

export default Display