import React from 'react'

export const ErrorHandler = () => {
  return (
    <>
      <p data-test={'error-message'}>Server Error</p>
      <button
        data-test={'retry-button'}
        inactive={'false'} 
        onClick={() => window.location.reload()}
      >
        Retry</button>
    </>
  )
}

export default ErrorHandler;