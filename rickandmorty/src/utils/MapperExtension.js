export function mapJsonToCharactersCard(jsonFile){
    if(jsonFile == []){
        return [];
    }
    console.log(jsonFile)
    return jsonFile.map((element) => {
            return {
                "picture": element.image ?? "undefined",
                "name": element.name ?? "undefined",
                "status": element.status ?? "undefined",
                "lastKnownLocation": element.location == undefined ? "undefined" : (element.location.name ?? "undefined"),
                "firstSeenLocation": element.origin == undefined ? "undefined" : (element.origin.name ?? "undefined"),
            }
        }
    )
}

export function mapJsonToCharacterCard(jsonFile){
    if(jsonFile == []){
        return [];
    }
    
    return {
        "picture": element.image ?? "undefined",
        "name": element.name ?? "undefined",
        "status": element.status ?? "undefined",
        "lastKnownLocation": element.location == undefined ? "undefined" : (element.location.name ?? "undefined"),
        "firstSeenLocation": element.origin == undefined ? "undefined" : (element.origin.name ?? "undefined"),
    }
}

