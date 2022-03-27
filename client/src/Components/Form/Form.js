import React, {useState} from 'react'
import { useFetchData } from "../../Hooks/useAPI";


const Form = () => {

  const [pokemonName, setPokemonName] = useState("");

  const {fetchData, data } = useFetchData(pokemonName)


  const handleOnChange = (e) => {
    const pokemonName = e.target.value
    const regex = /^(?![\s.]+$)[a-zA-Z\s.']*$/
    if (pokemonName.match(regex)) {
      setPokemonName(pokemonName)
    } else {
      console.log("Please enter a valid pokemon name")
    }
  }

  const handleOnClick = () => {
    fetchData()
    setPokemonName('')
    console.log(pokemonName)
  };

  return (
    <div>
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
    </div>
  )
}


export default Form;

  
