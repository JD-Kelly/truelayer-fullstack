import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: grid;
  justify-items: center;
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
  margin-top: 30px;
  margin-bottom: 10px;
  height: 100px;
  @media screen and (max-width: 800px) {
  }
`