import './style.css'
import SearchingPage from './src/pages/SearchingPage';
import TabManager from "./src/utils/TabManager";
import CharactersList from "./src/pages/CharactersList.js";

const rootElement = document.querySelector('#app')
const tabManager = new TabManager(rootElement, {

  searchingPage: {
    component: SearchingPage,
    params: [{ name: "" }]
  },
  charactersList: {
    component: CharactersList,
  }
})

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

document.getElementById("submitSearch").addEventListener('click', () => {
  const value = document.getElementById('searchInput').value;
  tabManager.componentMapping.searchingPage.params = [{ name: value }];
  tabManager.openTabById('searchingPage');
})
