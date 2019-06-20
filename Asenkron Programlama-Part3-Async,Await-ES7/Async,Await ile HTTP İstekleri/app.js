//fetch'deki isteklere benzer

class Request{
    async get(url){
        const response=await fetch(url);
        const data=await response.json();
        return data;

    }
    async post(url,data){
        const response=await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
          const res_data=await response.json();
          return res_data;
    }
    async put(url,data){
        const response=await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
          const res_data=await response.json();
          return res_data;
    }
    async delete(url){
        const response=await fetch(url,{
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });   //burada response.json() yapmaya gerek yok çünkü boş json gelecek
          return "veriler silindi";
    }
}

const request=new Request();
const update_data={
    userId:12,
    title:"yıkık"
}
request.put("https://jsonplaceholder.typicode.com/albums/5",update_data)
.then(response => console.log(response))
.catch(err => console.log(err));


//delete,get,put da böyle yapılacak diğer promise,fetch deki gibi