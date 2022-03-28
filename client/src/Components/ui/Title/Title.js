import React from 'react'
import { Header, SubHeader, TitleContainer } from './Title.styles'

const Title = ({ header, subheader }) => (
  <TitleContainer>
    <Header data-test='header-text'>{header}</Header>
    <SubHeader data-test='subheader-text'>{subheader}</SubHeader>
  </TitleContainer>
)

export default Title