import './style.css'
import Card from "./src/components/generateCharacterCard";
import UserPage from "./src/pages/UserPage";
import TabManager from "./src/utils/TabManager";
import ApiClient from "./src/utils/ApiClient";
import { mapJsonToCharactersCard } from './src/utils/MapperExtension';
import SearchingPage from './src/pages/SearchingPage';

const rootElement = document.querySelector('#app')
const apiClient = new ApiClient();

const datas = await apiClient.getCharactersPaginated(3);
console.log(mapJsonToCharactersCard(datas.results));
// console.log(apiClient.getCharactersFilteredByName('rick'));

const tabManager = new TabManager(rootElement, {
  page1: {
    component: () => document.createElement('div'),
    params: [{ src: 'http://placekitten.com/200/200', text: 'A cat' }]
  },
  user: {
    component: UserPage,
  },
  searchingPage: {
    component: SearchingPage,
    params: [{ name: "" }]
  }
})

tabManager.openTabById('user')

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {

    // On masque ou on affiche l'input de recherche en fonction de la page où nous sommes
    let searchInputDiv = document.getElementById("searchInputDiv");
    if(element.getAttribute('data-tabId') == "searchInput"){
      searchInputDiv.style.display = "block";
    } else {
      searchInputDiv.style.display = "none";
    }

    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

document.getElementById("searchInput").addEventListener('click', (e) => {
  tabManager.componentMapping.SearchingPage.params.name = e.target.value;
  tabManager.openTabById(element.getAttribute('searchingPage'));
})
