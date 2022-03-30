import styled from "styled-components";
import { GlobalStyledButton } from "../../../styles/global";

export const ErrorMessage = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
@media screen and (max-width: 800px) {
  font-size: 15px;
  text-align: center;
}
`
export const RetryButton = styled(GlobalStyledButton)`
  background: #646363;
  &:hover {
    background: #3f3f3f;
    transition: 0.5s;
    }
`