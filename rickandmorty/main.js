import './style.css'
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')
const tabManager = new TabManager(rootElement);
const searchBar = document.getElementById('search-bar');

document.querySelectorAll('[data-tabId]').forEach(navButton => {
  navButton.addEventListener('click', () => {
    tabManager.openTabById(navButton.getAttribute('data-tabId'))

    const page = navButton.getAttribute('data-tabId');
    searchBar.style.display = page === 'searchingPage' ? 'grid' : 'none'
  })
})

document.getElementById("submitSearch").addEventListener('click', () => {
  const value = document.getElementById('searchInput').value;
  const filter = document.getElementById('search-filter-select').value;
  tabManager.componentMapping.searchingPage.params = [{ filter: filter, value: value }];
  tabManager.openTabById('searchingPage');
})