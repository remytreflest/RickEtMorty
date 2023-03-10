import { generateCharacterCard } from "./CharacterCard.js";
import createDOMElement from "../dom/createDOMElement.js";

/**
 * Generate a DOM object containing a list of character cards
 * @param characterList
 * @constructor
 */
export default function generateDOMCharactersList(characterList) {
  return createDOMElement({
    tagName: 'div',
    classList: ['characters'],
    children: characterList.map((character) =>
      generateCharacterCard(character)
    )
  })
}