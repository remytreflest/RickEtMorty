import createDOMElement from "../dom/createDOMElement";
import { generateEpisodeCard } from "./EpisodeCard";

export default function generateDOMEpisodesList(episodeList) {
    return createDOMElement({
      tagName: 'div',
      classList: ['episode'],
      children: episodeList.map((character) =>
        generateEpisodeCard(character)
      )
    })
  }