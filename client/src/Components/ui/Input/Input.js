import React from "react";
import { StyledInput } from "./Input.styles";

const Input = ({ type, placeholder, value, onChange}) => (
  <>
    <StyledInput
      data-test={'input-field'}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </>
);

export default Input;