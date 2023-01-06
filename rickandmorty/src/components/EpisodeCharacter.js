export function generateEpisodeCharacterCard(character){
    console.log(character)
    return {
        tagName: 'div',
        classList: ['character-img'],
        children: [
            {
                tagName: 'img',
                attributes: {
                    'src': character.image
                },
            }
            
        ]
    }
}