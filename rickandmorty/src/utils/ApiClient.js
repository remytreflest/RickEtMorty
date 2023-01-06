class ApiClient {

    constructor(){
        this.baseUrl = "https://rickandmortyapi.com/api";
        this.characterUrl = "/character";
        this.locationUrl = "/location";
        this.episodeUrl = "/episode";
        this.graphQLUrl = "https://rickandmortyapi.graphcdn.app/";
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
        return await this.performGraphQLQuery(` 
            query GetEpisodes($page: Int!) {
                episodes(page: $page) {
                    results {
                        name
                        air_date
                        created
                        episode
                        characters {
                            image
                        }
                    }
                }
            }
          `, page);
    }

    async performGraphQLQuery(graphQLQuery, page) {
        return await this.performHttpRequest(this.graphQLUrl, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                query: graphQLQuery,
                variables: { "page" : page }
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