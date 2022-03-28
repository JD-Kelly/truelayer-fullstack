import React from 'react';
import { StyledButton } from './Button.styles'

const Button = ({ isDisabled, children, type, onClick, }) => (
  <StyledButton
    data-test={'submit-button'}
    disabled={isDisabled}
    type="button"
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;