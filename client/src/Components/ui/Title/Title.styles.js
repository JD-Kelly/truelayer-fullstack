import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px
`

export const Header = styled.div`
  font-size: 45px;
  margin-top: 50px;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    text-align: center;
  }
`

export const SubHeader = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`  