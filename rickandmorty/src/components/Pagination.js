import TabManager from "../utils/TabManager";

export default function createPagination(previousUrl, nextUrl, componentName){
    const pagination = document.createElement('div');
    pagination.classList.add("pagination-div");
    const tabManager = new TabManager(document.querySelector('#app'));
    const previousButton = createPreviousButton(previousUrl, tabManager, componentName);
    const nextButton = createNextButton(nextUrl, tabManager, componentName);
    pagination.appendChild(previousButton);
    pagination.appendChild(nextButton);
    return pagination;
  }
  
  function createPreviousButton(previousUrl, tabManager, componentName){
    const prevButton = document.createElement("button");
    prevButton.textContent = "Précédent";
    if(previousUrl != null){
      prevButton.classList.add('custom-btn', 'btn-5', 'purple', 'prev');
      prevButton.addEventListener('click', () => {
        tabManager.componentMapping[componentName].params = [{ page : Number.isInteger(previousUrl) ? previousUrl : previousUrl.slice(-1)}]
        tabManager.openTabById(componentName);
      })
    } else {
      prevButton.classList.add('custom-btn', 'btn-5', 'gray', 'prev');
    }
    return prevButton;
  }
  
  function createNextButton(nextUrl, tabManager, componentName){
    const nextButton = document.createElement("button");
    nextButton.textContent = "Suivant";
    if(nextUrl != null){
      nextButton.classList.add('custom-btn', 'btn-5', 'orange', 'next');
      nextButton.addEventListener('click', () => {
        tabManager.componentMapping[componentName].params = [{ page : Number.isInteger(nextUrl) ? nextUrl : nextUrl.slice(-1)}]
        tabManager.openTabById(componentName);
      })
    } else {
      nextButton.classList.add('custom-btn', 'btn-5', 'gray', 'next');
    }
    return nextButton;
  }