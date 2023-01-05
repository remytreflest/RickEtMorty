import { generateCharacterCard } from "./CharacterCard.js";
import createDOMElement from "../dom/createDOMElement.js";
import charactersList from "../pages/CharactersList.js";

/**
 * Generate a DOM object containing a list of character cards
 * @param characterList
 * @constructor
 */
export function generateDOMCharactersList(characterList) {
  return createDOMElement({
    tagName: 'div',
    classList: ['characters'],
    children: characterList.map((character) => generateCharacterCard(character))
  })
}