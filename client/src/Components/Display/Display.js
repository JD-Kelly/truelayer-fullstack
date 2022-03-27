import React from 'react'
import LoadingHandler from "../ui/LoadingHandler/LoadingHandler"

const Display = ({ isError ,data, isLoading}) => {
  return (
    isError ? <p>There was an error</p> :
    isLoading ? <LoadingHandler /> :
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