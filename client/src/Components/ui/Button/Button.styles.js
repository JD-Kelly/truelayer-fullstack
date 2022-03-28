import styled from "styled-components";

export const StyledButton = styled.button`
  background: #196cff;
  color: #ffff;
  width: 150px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  padding: 16px 50px;
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