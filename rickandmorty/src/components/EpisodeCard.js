import { generateEpisodeCharacterCard } from "./EpisodeCharacter";

export function generateEpisodeCard(episode) {
    return {
      tagName: 'div',
      classList: ['card-character'],
      attributes: {
        'data-id': episode.id
      },
      children: [
            {
                tagName: 'div',
                classList: ['card-header-character'],
                text: `${episode.name} : ${episode.episode} - ${episode.air_date}`
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