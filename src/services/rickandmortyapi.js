import axios from "axios";

/**
 * Busca uma lista paginada de episódios da API.
 * * @async
 * @function getCharacters
 * @param {number|string} page - O número da página a ser recuperada.
 * @returns {Promise<Object>} Um objeto contendo a propriedade `info` (paginação) e `results` (lista de episódios).
 * @throws {Error} Caso ocorra uma falha na requisição HTTP.
 */
export async function getCharacters(page) {
  const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
  return response.data;
}

/**
 * Busca os detalhes de um episódio específico através do seu ID.
 * * @async
 * @function getCharacterById
 * @param {number|string} id - O identificador único do episódio.
 * @returns {Promise<Object>} Objeto com os dados detalhados do episódio (nome, data, personagens, etc).
 * @throws {Error} Caso o ID não seja encontrado ou ocorra erro na API.
 */
export async function getCharacterById(id) {
  const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
  return response.data;
}
