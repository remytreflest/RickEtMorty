import generateDOMCharactersList from "../components/CharacterCardList.js";
import ApiClient from "../utils/ApiClient.js";
import { mapJsonToCharactersCard } from "../utils/MapperExtension.js";

let apiClient = new ApiClient();

const charactersList = async () => {
  const data = await apiClient.getCharactersPaginated();
  const characters = mapJsonToCharactersCard(
      data.results  );
  return generateDOMCharactersList(characters)
}

export default charactersList