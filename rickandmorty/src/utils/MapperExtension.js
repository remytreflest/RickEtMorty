export function mapJsonToCharactersCard(jsonFile){
    if(jsonFile == []){
        return [];
    }

    return jsonFile.map((element) => {
        return {
            "picture": element.image,
            "name": element.name,
            "status": element.status,
            "lastKnownLocation": element.location.name,
            "firstSeenLocation": element.origin.name
        }
    })
}

export function mapJsonToCharacterCard(jsonFile){
    if(jsonFile == []){
        return [];
    }
    
    return {
        "picture": jsonFile.image,
        "name": jsonFile.name,
        "status": jsonFile.status,
        "lastKnownLocation": jsonFile.location.name,
        "firstSeenLocation": jsonFile.origin.name
    }
}

