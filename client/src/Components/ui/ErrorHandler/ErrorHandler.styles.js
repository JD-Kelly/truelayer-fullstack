import styled from "styled-components";

export const StyledErrorHandler = styled.div`
font-size: 20px;
margin-top: 30px;
margin-bottom: 10px;
@media screen and (max-width: 800px) {
  font-size: 15px;
  text-align: center;
}
`
export const StyledRetryButton = styled.button`
background: #5b5b5b;
  color: #ffff;
  width: 150px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 3px;
  padding: 18px 50px;
  border: none;
  cursor: pointer;
  &:hover {
  background: #898888;
  transition: 0.5s;
  }
  @media screen and (max-width: 800px) {
   padding: 10px 40px;
  }
  `