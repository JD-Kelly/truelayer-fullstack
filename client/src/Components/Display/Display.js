import React from "react"
import LoadingHandler from "../ui/LoadingHandler/LoadingHandler"
import ErrorHandler  from "../ui/ErrorHandler/ErrorHandler"
import { DisplayContainer, PokemonName, PokemonDescription, PokemonImage } from "./Display.styles"

const Display = ({ isError, data, isLoading}) => (
    <DisplayContainer>
    {isError && <ErrorHandler errorMessage="There was a server error, please click retry and enter a name:"/>}
    {isLoading ? <LoadingHandler loadingMessage ="Loading..."/> :
      <>
        <PokemonName>{data.name}</PokemonName>
        <PokemonDescription>{data.description}</PokemonDescription>
        <PokemonImage
          src={data.image}
          alt="" />
      </>
    } 
    </DisplayContainer>
    )

export default Display