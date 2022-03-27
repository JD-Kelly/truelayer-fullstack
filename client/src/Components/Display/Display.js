import React from 'react'
import LoadingHandler from "../ui/LoadingHandler/LoadingHandler"
import { ErrorHandler } from "../ui/ErrorHandler/ErrorHandler"

const Display = ({ isError ,data, isLoading}) => {
  return (
    <div>
    {isError ? <ErrorHandler /> :
    isLoading ? <LoadingHandler /> :
      <>
        <h3>{data.name}</h3>
        <h3>{data.description}</h3>
        <img
          src={data.image}
          alt="" />
      </>
    }
      </div>
    )
  }

export default Display