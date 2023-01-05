import './style.css'
import CharacterCard from "./src/components/CharacterCard.js";
import UserPage from "./src/pages/CharactersList.js";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: () => document.createElement('div'),
    params: [{ src: 'http://placekitten.com/200/200', text: 'A cat' }]
  },
  charactersList: {
    component: CharactersList,
  }
})

tabManager.openTabById('user')

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})