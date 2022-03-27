import { useState } from "react";
import axios from 'axios';

export const useFetchData = (pokemonName) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:9000/pokemon/${pokemonName}`)
      .then((response) => {
        setData(response.data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  };
  return {
    fetchData,
    data,
  };
}