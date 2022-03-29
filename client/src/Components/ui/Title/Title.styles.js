import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px
`

export const Header = styled.div`
  font-size: 65px;
  margin-top: 50px;
  @media screen and (max-width: 800px) {
    font-size: 35px;
    text-align: center;
  }
`

export const SubHeader = styled.div`
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`  