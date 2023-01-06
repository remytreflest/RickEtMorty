export function generateEpisodeCharacterCard(character){
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