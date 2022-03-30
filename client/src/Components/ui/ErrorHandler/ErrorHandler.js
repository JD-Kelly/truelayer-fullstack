import React from "react";
import { ErrorMessage, RetryButton } from "./ErrorHandler.styles";

const ErrorHandler = ({errorMessage}) => {
  return (
    <>
      <ErrorMessage data-test="error-message">{errorMessage}</ErrorMessage>
      <RetryButton
        data-test={"retry-button"}
        inactive={"false"} 
        onClick={() => window.location.reload()}
      >
        Retry</RetryButton>
    </>
  )
}

export default ErrorHandler;