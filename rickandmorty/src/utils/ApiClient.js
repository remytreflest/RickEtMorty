class ApiClient {

    constructor(){
        this.baseUrl = "https://rickandmortyapi.com/api";
        this.characterUrl = "/character";
        this.locationUrl = "/location";
        this.episodeUrl = "/episode";
        this.graphQLUrl = "/graphql";
    }

    async getCharactersPaginated(page = 1){
        return await this.performHttpRequest(this.baseUrl + this.characterUrl + `?page=${page}`);
    }

    async getCharacter(id){
        return await this.performHttpRequest(this.baseUrl + this.characterUrl + `/${id}`);
    }

    async getCharactersFilteredByName(name){
        return await this.performHttpRequest(this.baseUrl + this.characterUrl + `/?name=${name}`);
    }

    async getEpisodesPaginated(page = 1){
        return await this.performGraphQLQuery(`{
            episodes(page: ${page}) {
                characters {
                    image
                }
            }
        }`);
    }

    async performGraphQLQuery(graphQLQuery) {
        return await this.performHttpRequest(this.baseUrl + this.graphQLUrl, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                query: graphQLQuery,
                variables: { id: "123" }
            })
        })
    }

    async performHttpRequest(url, requestSettings = null) {
        try {
            return await fetch(url, requestSettings)
                .then((data) => data.json())
                .then(data => { if("error" in data){
                    return [];
                } else {
                    return data;
                }});
        } catch(ex){
            throw new Error(ex);
        }
    }
}

export default ApiClient;