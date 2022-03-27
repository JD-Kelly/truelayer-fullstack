import React from 'react'

export const ErrorHandler = () => {
  return (
    <>
      <p>Server Error</p>
      <button
        inactive={false} onClick={() => window.location.reload()}
      >
        Retry</button>
    </>
  )
}