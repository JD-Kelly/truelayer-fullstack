import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
  
body {
    padding: 0;
    margin: 0;
    background: lightblue;
    font-family: "Inter", sans-serif;
    color: #000000
  }
`;
export const ValidationWarning = styled.div`
  text-align: center;
  color: red;
  margin-bottom: 5px;
`;

export const GlobalStyledButton = styled.button`
  background: #196cff;
  color: #ffff;
  width: 150px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 3px;
  padding: 18px 50px;
  border: none;
  cursor: pointer;
  &:hover {
  background: #0000ee;
  transition: 0.5s;
  }
  @media screen and (max-width: 800px) {
   padding: 10px 40px;
  }
`;