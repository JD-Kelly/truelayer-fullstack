import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 80px;
  padding-bottom: 80px
`;

export const PokemonName = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`

export const PokemonDescription = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`

export const PokemonImage = styled.img`
  border: none;
  margin-top: 30px;
  margin-bottom: 10px;
  height: 200px;
  width: 200px;
  @media screen and (max-width: 800px) {
    height: 100px;
    width: 100px
  }
`
