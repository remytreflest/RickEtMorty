import CharacterCardList from "../components/CharacterCardList.js"

const ShowCharacterList = async () => {
  const res = await fetchCharacters()
  return CharacterCardList(res.data)
}

export default CharactersList