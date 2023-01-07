import CharacterCardList from "../components/CharacterCardList"
import ApiClient from "../utils/ApiClient"
import { mapJsonToCharactersCard } from "../utils/MapperExtension"

const apiClient = new ApiClient;

const SearchingPage = async (param) => {
  const datas = mapJsonToCharactersCard(
      param === "" ? [] : (await apiClient.getCharactersFilteredByParam(param.filter, param.value)).results
  );
  return CharacterCardList(datas);
}

export default SearchingPage