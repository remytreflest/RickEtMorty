import { generateEpisodeCharacterCard } from "./EpisodeCharacter";

export default function generateDOMCharactersList(episodeList) {
    return createDOMElement({
      tagName: 'div',
      classList: ['episode'],
      children: episodeList.map((character) =>
        generateEpisodeCharacterCard(character)
      )
    })
  }