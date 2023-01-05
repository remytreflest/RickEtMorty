import { generateCharacterCard } from "./CharacterCard.js";

/**
 * Generate a characterList object that is usable by the createElement() method
 * @param characterList
 * @constructor
 */
export function generateCharacterCardList(characterList) {
  let characterCardList = array();
  characterList.forEach(function(character, index) {
    characterCardList.push(generateCharacterCard(character));
  })
  return characterCardList;
}