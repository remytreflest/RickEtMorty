export function mapJsonToCharactersCard(jsonFile){
    if(jsonFile == []){
        return [];
    }
    console.log(jsonFile)
    return jsonFile.map((element) => {
            return {
                "id": element.id,
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
    if(jsonFile == []){
        return [];
    }
    
    return {
        "id": jsonFile.id,
        "picture": jsonFile.image,
        "name": jsonFile.name,
        "status": jsonFile.status,
        "lastKnownLocation": jsonFile.location.name,
        "firstSeenLocation": jsonFile.origin.name
    }
}

