import styled from "styled-components";
import { GlobalStyledButton } from "../../../styles/global";


export const StyledErrorHandler = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
@media screen and (max-width: 800px) {
  font-size: 15px;
  text-align: center;
}
`
export const StyledRetryButton = styled(GlobalStyledButton)`
  color: red;
`