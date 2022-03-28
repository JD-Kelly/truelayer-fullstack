import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
  
body {
    padding: 0;
    margin: 0;
    background: lightblue;
    font-family: "Inter", sans-serif;
    color: #000000
  }
`
export const ValidationWarning = styled.div`
  text-align: center;
  color: red;
`;