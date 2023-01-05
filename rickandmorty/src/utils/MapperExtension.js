export function mapJsonToCharactersCard(jsonFile){
    return jsonFile.map((element) => {
            return {
                "picture": element.image,
                "name": element.name,
                "status": element.status,
                "lastKnownLocation": element.location.name,
                "firstSeenLocation": element.origin.name
            }
        }
    )
}

export function mapJsonToCharacterCard(jsonFile){
    return {
        "picture": jsonFile.image,
        "name": jsonFile.name,
        "status": jsonFile.status,
        "lastKnownLocation": jsonFile.location.name,
        "firstSeenLocation": jsonFile.origin.name
    }
}

