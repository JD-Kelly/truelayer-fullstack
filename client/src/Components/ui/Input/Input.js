import React from "react";

const Input = ({ type, placeholder, value, onChange, }) => (
  <>
    <input
      data-test={'input-field'}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </>
);

export default Input;