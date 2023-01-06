import Character from "../pages/Character"
import charactersList from "../pages/CharactersList"
import SearchingPage from "../pages/SearchingPage"

class TabManager {
    constructor(rootElement) {
      this.rootElement = rootElement
      this.componentMapping = {

        searchingPage: {
          component: SearchingPage,
          params: [{ name: "" }]
        },
        charactersList: {
          component: charactersList,
        },
        character: {
          component: Character,
          params: [{ id : 0}]
        }
      }
    }
  
    async openTabById(id) {
      if (!(id in this.componentMapping)) {
        throw new Error('This id is not valid')
      }
      const { component, params = [] } = this.componentMapping[id]
      console.log("params" + JSON.stringify(params));
      const Component = await component(...params)
      this.rootElement.innerHTML = ''
      this.rootElement.appendChild(Component)
    }
  }
  
  export default TabManager