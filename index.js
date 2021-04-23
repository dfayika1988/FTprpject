const fetch = require("node-fetch");

module.exports = function Urls(urls){
    // use map() to fetch and handle the response for each url
    let results = Promise.all(urls.map(url =>
        fetch(url)
            .then(Status)
            .then(JSON)
            .catch(error => console.log('There was a problem!', error))
    ));
    return results;
}

function JSON(response) {
    return response.json();
}
  
function Status(response){
    if(response.ok){
        return Promise.resolve(response);
    } else{
        return Promise.reject(new Error(response.statusText));
    }
}

