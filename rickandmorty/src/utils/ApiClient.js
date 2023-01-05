class ApiClient {

    constructor(){
        this.baseUrl = "https://rickandmortyapi.com/api";
        this.characterUrl = "/character";
        this.locationUrl = "/location";
        this.episodeUrl = "/episode";
    }

    async getCharactersPaginated(page = 1){
        return await this.getDatasFromUrl(this.baseUrl + this.characterUrl + `?page=${page}`);
    }

    async getCharacter(id){
        return await this.getDatasFromUrl(this.baseUrl + this.characterUrl + `/${id}`);
    }

    async getCharactersFilteredByName(name){
        return await this.getDatasFromUrl(this.baseUrl + this.characterUrl + `/?name=${name}`);
    }

    async getDatasFromUrl(url){
        try {
            const request = await fetch(url)
                .then((data) => data.json())
                .then(data => { if("error" in data){
                    return [];
                } else {
                    return data;
                }});
            return request;
        } catch(ex){
            throw new Error(ex);
        }
    }

}

export default ApiClient;