const baseUrl = 'https://api.intermedia.net';


function getContacts(params){ 
    const url = `${baseUrl}/address-book/v3/contacts${params}`;
       
    return makeRequest("GET", url).then((response) => response.json());
}

function getUserDetails(params){ 
    const url = `${baseUrl}/address-book/v3/contacts/_me${params}`;

    return makeRequest("GET", url).then((response) => response.json());
}

function getContactsByJIDs(jids, params){ 
    const url = `${baseUrl}/address-book/v3/contacts/_search${params}`;
    const jidsArray = jids.split(",");
    const body = {
        "jids" : jidsArray
    }

    return makeRequest("POST", url, body).then((response) => response.json());
}

function getSingleContact(id, params){ 
    const url = `${baseUrl}/address-book/v3/contacts/${id}${params}`;

    return makeRequest("GET", url).then((response) => response.json());
}

function getAvatar(avatarId){
    const url = `${baseUrl}/address-book/v3/avatars/${avatarId}`;

    return makeRequest('GET', url).then((response) => response.json());
}

function getMultipleAvatars(avatarIds){
    const url = `${baseUrl}/address-book/v3/avatars/_search`;
    const body = {
        "avatarIds": avatarIds,
    };
    return makeRequest('POST', url, body).then((response) => response.json());
}


