import { useState } from "react";
import axios from "axios";

export const useFetchData = (pokemonName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

    const fetchData = () => {
      setIsLoading(true)
      axios
      .get(`http://localhost:9000/pokemon/${pokemonName}`)
      .then((response) => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        setIsLoading(false)
      })
  };
  return {
    fetchData,
    data,
    isLoading,
    isError
  };
}



