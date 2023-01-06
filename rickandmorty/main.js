import './style.css'
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')
const tabManager = new TabManager(rootElement);
const searchDiv = document.getElementById('searchInputDiv');

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
    if(element.getAttribute('data-tabId') == 'searchingPage'){
      searchDiv.style.display = 'block';
    } else {
      searchDiv.style.display = 'none';
    }
  })
})

document.getElementById("submitSearch").addEventListener('click', () => {
  const value = document.getElementById('searchInput').value;
  tabManager.componentMapping.searchingPage.params = [{ name: value }];
  tabManager.openTabById('searchingPage');
})