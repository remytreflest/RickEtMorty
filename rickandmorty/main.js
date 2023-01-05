import './style.css'
import TabManager from "./src/utils/TabManager";
import ApiClient from "./src/utils/ApiClient";
import { mapJsonToCharactersCard } from './src/utils/MapperExtension';
import CharactersList from "./src/pages/CharactersList.js";

const rootElement = document.querySelector('#app')
const apiClient = new ApiClient();

const tabManager = new TabManager(rootElement, {
  charactersList: {
    component: CharactersList,
  }
})

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})