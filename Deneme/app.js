function get(url) {
    return new Promise(function(resolve,reject) {
    fetch(url)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        resolve(data);
    })
    .catch(function(err){
        reject(err);
    })

    });
    
}
get("http://api.db-ip.com/v2/free/8.8.8.8")
.then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
});



