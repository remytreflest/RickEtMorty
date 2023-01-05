export default class TabManager {
    constructor(rootElement, {...routes}){
        this.rootElement = rootElement;
        this.routes = routes;
    }

    async openTabById(string){
        if(!this.routes[string]){
            throw new Error("La route n'existe pas");
        }
        const { component, params = []} = this.routes[string];
        const Component = await component(...params);
        this.rootElement.appendChild(Component);
    }
}