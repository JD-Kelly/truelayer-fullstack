import React from 'react';

const Button = ({ isDisabled, children, type, onClick, }) => (
  <button
    disabled={isDisabled}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;