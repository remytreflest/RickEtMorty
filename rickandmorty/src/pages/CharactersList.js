import generateDOMCharactersList from "../components/CharacterCardList.js";
import ApiClient from "../utils/ApiClient.js";
import { mapJsonToCharactersCard } from "../utils/MapperExtension.js";
import TabManager from "../utils/TabManager.js";

let apiClient = new ApiClient();

const charactersList = async ({page}) => {
  const data = await apiClient.getCharactersPaginated(page);
  const characters = mapJsonToCharactersCard(
      data.results  );

  const characterslist = generateDOMCharactersList(characters);

    console.log(JSON.stringify(data.info))
  const pagination = createPagination(data.info.prev, data.info.next)

  characterslist.appendChild(pagination);
  return characterslist;
}

export default charactersList

function createPagination(previousUrl, nextUrl){
  const div = document.createElement('div');
  div.classList.add("pagination-div");
  const tabManager = new TabManager(document.querySelector('#app'));
  const previousButton = createPreviousButton(previousUrl, tabManager);
  const nextButton = createNextButton(nextUrl, tabManager);
  div.appendChild(previousButton);
  div.appendChild(nextButton);
  return div;
}

function createPreviousButton(previousUrl, tabManager){
  const prevButton = document.createElement("button");
  prevButton.textContent = "Précédent";
  if(previousUrl != null){
    prevButton.classList.add('custom-btn', 'btn-5', 'purple', 'prev');
    prevButton.addEventListener('click', () => {
      console.log('hello')
      tabManager.componentMapping.charactersList.params = [{ page : previousUrl.slice(-1)}]
      tabManager.openTabById('charactersList');
    })
  } else {
    prevButton.classList.add('custom-btn', 'btn-5', 'gray', 'prev');
  }
  return prevButton;
}

function createNextButton(nextUrl, tabManager){
  const nextButton = document.createElement("button");
  nextButton.textContent = "Suivant";
  if(nextUrl != null){
    nextButton.classList.add('custom-btn', 'btn-5', 'orange', 'next');
    nextButton.addEventListener('click', () => {
      console.log('hello')
      tabManager.componentMapping.charactersList.params = [{ page : nextUrl.slice(-1)}]
      tabManager.openTabById('charactersList');
    })
  } else {
    nextButton.classList.add('custom-btn', 'btn-5', 'gray', 'next');
  }
  return nextButton;
}