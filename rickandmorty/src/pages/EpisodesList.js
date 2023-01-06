import generateDOMEpisodesList from "../components/EpisodeCardList.js";
import createPagination from "../components/Pagination.js";
import ApiClient from "../utils/ApiClient.js";
let apiClient = new ApiClient();

const EpisodesList = async ({ page }) => {
    const episodes = await apiClient.getEpisodesPaginated(page);
    const episodesList = generateDOMEpisodesList(episodes.data.episodes.results);
    const pagination = createPagination(episodes.data.episodes.info.prev, episodes.data.episodes.info.next, "episodesList")
    episodesList.appendChild(pagination);

    return episodesList;
}

export default EpisodesList