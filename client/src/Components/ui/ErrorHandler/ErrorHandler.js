import React from 'react'
import { StyledErrorHandler, StyledRetryButton } from "./ErrorHandler.styles";

const ErrorHandler = ({errorMessage}) => {
  return (
    <>
      <StyledErrorHandler data-test='error-message'>{errorMessage} </StyledErrorHandler>
      <StyledRetryButton
        data-test={'retry-button'}
        inactive={'false'} 
        onClick={() => window.location.reload()}
      >
        Retry</StyledRetryButton>
    </>
  )
}

export default ErrorHandler;