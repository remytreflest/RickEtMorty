import generateDOMCharactersList from "../components/CharacterCardList.js";
import createPagination from "../components/Pagination.js";
import ApiClient from "../utils/ApiClient.js";
import { mapJsonToCharactersCard } from "../utils/MapperExtension.js";

let apiClient = new ApiClient();

const charactersList = async ({page}) => {
  const data = await apiClient.getCharactersPaginated(page);
  const characters = mapJsonToCharactersCard(
      data.results  );

  const characterslist = generateDOMCharactersList(characters);

  const pagination = createPagination(data.info.prev, data.info.next, "charactersList")

  characterslist.appendChild(pagination);
  return characterslist;
}

export default charactersList