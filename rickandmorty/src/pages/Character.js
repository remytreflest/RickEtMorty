import { mapJsonToCharacterCard} from "../utils/MapperExtension.js";
import generateDOMCharactersList from "../components/CharacterCardList.js";
import ApiClient from "../utils/ApiClient.js";

let apiClient = new ApiClient();

const Character = async ({id}) => {
    const data = await apiClient.getCharacter(id);
    const characters = mapJsonToCharacterCard(data);
    return generateDOMCharactersList([characters])
}

export default Character