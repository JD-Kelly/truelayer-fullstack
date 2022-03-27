import React from 'react'


const Title = ({ header, subheader }) => (
  <div>
    <h1 data-test='header-text'>{header}</h1>
    <h2 data-test='subheader-text'>{subheader}</h2>
  </div>
)

export default Title