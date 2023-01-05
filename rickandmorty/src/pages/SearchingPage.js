import CharacterCardList from "../components/CharacterCardList"
import ApiClient from "../utils/ApiClient"
import { mapJsonToCharactersCard } from "../utils/MapperExtension"

const apiClient = new ApiClient;

const SearchingPage = async ({ name = "" }) => {
  const datas = mapJsonToCharactersCard(name == "" ? [] : (await apiClient.getCharactersFilteredByName(name)).results);
  return CharacterCardList(datas);
}

export default SearchingPage