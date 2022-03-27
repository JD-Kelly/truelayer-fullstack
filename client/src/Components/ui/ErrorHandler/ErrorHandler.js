import React from 'react'

const ErrorHandler = ({errorMessage}) => {
  return (
    <>
      <p data-test='error-message'>{errorMessage}</p>
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