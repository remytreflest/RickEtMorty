import './style.css'
import TabManager from "./src/utils/TabManager";
import CharactersList from "./src/pages/CharactersList.js";
import Character from "./src/pages/Character";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  charactersList: {
    component: CharactersList,
  },
  character: {
    component: Character,
  }
})

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})