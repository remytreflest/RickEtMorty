import { generateEpisodeCharacterCard } from "./EpisodeCharacter";

export function generateEpisodeCard(episode) {
    return {
      tagName: 'div',
      classList: ['card-character'],
      attributes: {
        'data-id': character.id
      },
      children: [
            {
                tagName: 'div',
                classList: ['card-header-character'],
                text: character.text // sera pas exactement ça
            },
            {
                tagName: 'div',
                classList: ['card-body-character'],
                children: episode.characters.map((character) =>
                    generateEpisodeCharacterCard(character)
            )
            }
        ]
    }
  }