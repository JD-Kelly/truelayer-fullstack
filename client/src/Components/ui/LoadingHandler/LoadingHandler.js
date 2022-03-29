import React from 'react'
import { StyledLoadingHandler } from "./LoadingHandler.styles";

const LoadingHandler = ({loadingMessage}) => (
  <>
    <StyledLoadingHandler> data-test={'loading-message'}{loadingMessage}</StyledLoadingHandler>
  </>
  )


export default LoadingHandler