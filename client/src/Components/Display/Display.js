import React from 'react'
import LoadingHandler from "../ui/LoadingHandler/LoadingHandler"
import ErrorHandler  from "../ui/ErrorHandler/ErrorHandler"
import { DisplayContainer, PokemonName, PokemonDescription, PokemonImage } from './Display.styles'

const Display = ({ isError ,data, isLoading}) => {
  return (
    <DisplayContainer>
    {isError && <ErrorHandler errorMessage='server error'/>}
    {isLoading ? <LoadingHandler data-test={"loading-handle"}/> :
      <>
        <PokemonName data-test={'pokemon-name'}>{data.name}</PokemonName>
        <PokemonDescription data-test={'pokemon-description'}>{data.description}</PokemonDescription>
        <PokemonImage
          data-test={'pokemon-image'}
          src={data.image}
          alt="" />
      </>
    } 
      </DisplayContainer>
    
    )
  }

export default Display