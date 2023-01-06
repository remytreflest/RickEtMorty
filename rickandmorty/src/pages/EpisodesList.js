import ApiClient from "../utils/ApiClient.js";
let apiClient = new ApiClient();

const EpisodesList = async () => {
    const episodes = await apiClient.getEpisodesPaginated();
    return generateDOMEpisodesList(episodes);
}

export default EpisodesList