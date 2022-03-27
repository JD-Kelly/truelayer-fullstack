import { useState } from "react";
import axios from 'axios';

export const useFetchData = (pokemonName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true)
    axios
      .get(`http://localhost:9000/pokemon/${pokemonName}`)
      .then((response) => {
        setData(response.data)
        setIsLoading(false)
        console.log(data)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  };
  return {
    fetchData,
    data,
    isLoading
  };
}