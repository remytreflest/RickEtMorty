import CardList from "../components/CardList"
import ApiClient from "../utils/ApiClient"
import { mapJsonToCharactersCard } from "../utils/MapperExtension"

const apiClient = new ApiClient;

const SearchingPage = async ({ name = "" }) => {

  console.log("name : " + name);
  const datas = mapJsonToCharactersCard(name == "" ? [] : mapJsonToCharactersCard(await apiClient.getCharactersFilteredByName(name)));
  console.log("datas : " + datas);
  return CardList(datas);
}

export default SearchingPage