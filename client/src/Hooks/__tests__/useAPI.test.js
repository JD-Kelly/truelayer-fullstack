import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {useFetchData} from "../useAPI";

test("useFetchData performs GET request", async () => {
  const pokemonName = "charizard";
  const mock = new MockAdapter(axios);

  const mockData = {name: "Charizard", description: "This is Charizard"};
  const url = "http://localhost:9000/pokemon/charizard";
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
  useFetchData(pokemonName)
);
    
  act(() => {
    result.current.fetchData()
  })
 
  expect(result.current.data).toEqual([])
  expect(result.current.isLoading).toBe(true)

  await waitForNextUpdate()
  expect(result.current.data.name).toBe("Charizard")
  expect(result.current.data.description).toBe("This is Charizard")
  expect(result.current.isLoading).toBe(false)
});

