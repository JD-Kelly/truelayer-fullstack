import React, {useState} from 'react'
import { useFetchData } from "../../Hooks/useAPI";
import Display from '../Display/Display'
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { InputContainer, ButtonContainer} from "./Form.styles";
import { ValidationWarning } from "../../styles/global";


const Form = () => {

  const [pokemonName, setPokemonName] = useState("");
  const [validationError, setValidationError] = useState(false);

  const {fetchData, data, isLoading, isError } = useFetchData(pokemonName)


  const handleOnChange = (e) => {
    const pokemonName = e.target.value
    const regex = /^(?![\s.]+$)[a-zA-Z\s.']*$/
    if (pokemonName.match(regex)) {
      setPokemonName(pokemonName)
      setValidationError(false)
    } else {
      setValidationError(true)
    }
  }

  const handleOnClick = () => {
    setValidationError(false)
    fetchData()
    setPokemonName('')
    console.log(pokemonName)
  };

  return (
    <div>
       {validationError && <ValidationWarning>Please enter a valid input</ValidationWarning>}
       <InputContainer>
        <Input
          type="text"
          value={pokemonName}
          onChange={handleOnChange}
          placeholder="Enter Pokemon name..."
        />
        </InputContainer>
        <ButtonContainer>
        <Button
          type="submit"
          onClick={handleOnClick}
        >
          Submit
        </Button>
        </ButtonContainer>
        <Display data={data} isLoading={isLoading} isError={isError} />
    </div>
    
  )
}


export default Form;

  
