import {mapJsonToCharactersCard} from "../utils/MapperExtension.js";
import {generateDOMCharactersList} from "../components/CharacterCardList.js";
import ApiClient from "../utils/ApiClient.js";

let apiClient = new ApiClient();

const Character = async (characterId) => {
    const data = await apiClient.getCharacter(characterId);
    const characters = mapJsonToCharactersCard(
        data.results  );
    return generateDOMCharactersList(characters)
}

export default Character