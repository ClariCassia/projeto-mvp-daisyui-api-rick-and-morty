import axios from "axios";

export async function getCharacters() {
  const response = await axios.get("https://rickandmortyapi.com/api/episode");

  return response.data;
}
