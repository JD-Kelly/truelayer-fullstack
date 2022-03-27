import React from 'react'

const Display = ({ isError ,data, isLoading}) => {
  return (
    isError ? <p>There was an error</p> :
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