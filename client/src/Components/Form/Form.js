import React, {useState} from 'react'
import { useFetchData } from "../../Hooks/useAPI";
import Display from '../Display/Display'


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
       {validationError && <h3>Please enter a valid input</h3>}
        <input
          type="text"
          value={pokemonName}
          onChange={handleOnChange}
          placeholder="Enter Pokemon name..."
        />
        <button
          type="submit"
          onClick={handleOnClick}
        >
          Submit
        </button>
        <Display data={data} isLoading={isLoading} isError={isError}/>
    </div>
    
  )
}


export default Form;

  
