// class Request{
//     get(url){
//         fetch(url)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//         })
//         .catch(function(err){
//             console.log(err);
//         });
//     }
// }


// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

//yukarıdaki kodlarda biz direk dışarı output veriyoruz fakat bir değişkene eşitlemek istersek
//aşağıdaki gibi olur


class Request{
    get(url){
        return new Promise(function(resolve,reject){
            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                resolve(data);
            })
            .catch(function(err){
                reject(err);
            });
        });
            
    }
    //***************************************************************** */
    //POST Requesti

    post(url,data){
        return new Promise(function(resolve,reject){
            fetch(url,{
                        method: 'POST',  //post olduğunu belirtiyoruz
                        body: JSON.stringify(data),  //string'e çevirmemiz lazım
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"//hangi veri tipinde göndereceğiz
                        }
                })
                .then(function(response){
                    return response.json();
                })
                .then(function(response2){
                    resolve(response2);
                })
                .catch(function(err){
                    reject(err);
                })
        });
    }
    // **********************************************************************************
    //PUT Requesti

    put(url,data){
        return new Promise(function(resolve,reject){
            fetch(url,{
                        method: 'PUT',  //put olduğunu belirtiyoruz
                        body: JSON.stringify(data),  //string'e çevirmemiz lazım
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"//hangi veri tipinde göndereceğiz
                        }
                })
                .then(function(response){
                    return response.json();
                })
                .then(function(response2){
                    resolve(response2);
                })
                .catch(function(err){
                    reject(err);
                })
        });

    }
    // **********************************************************************************
    //DELETE Requesti
    delete(url){
        fetch(url,{method:"DELETE"})
        .then(() => console.log("başarıyla silindi"))
        .catch(err => console.log(err));
    }
    
}    

const request=new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(function(response){
//     let albums=response;
//     console.log(albums);
// })
// .catch(function(err){
//     console.log(err);
// })


// const send_data={
//     userId:12,
//     title:"yıkık"
// }
// request.post("https://jsonplaceholder.typicode.com/albums",send_data)
// .then(response => console.log(response))
// .catch(err => console.log(err));


// const update_data={
//     userId:12,
//     title:"yıkık"
// }
// request.put("https://jsonplaceholder.typicode.com/albums/5",update_data)
// .then(response => console.log(response))
// .catch(err => console.log(err));


request.delete("https://jsonplaceholder.typicode.com/albums/5");
