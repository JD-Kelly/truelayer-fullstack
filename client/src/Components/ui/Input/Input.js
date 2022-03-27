import React from "react";

const Input = ({ type, placeholder, value, onChange, }) => (
  <>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </>
);

export default Input;