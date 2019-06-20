class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency=firstCurrency;
        this.secondCurrency=secondCurrency;
        this.url=`https://api.exchangeratesapi.io/latest?base=`;
        this.amount=null;  //her inputta değişeceği için null yaptık
    }
    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url+this.firstCurrency)
            .then(function(response){
                
                return response.json();
                
            })
            .then(data => {  
                
                const parity=data.rates[this.secondCurrency];
                const amount2=Number(this.amount);
                let total=parity * amount2;
                resolve(total);
    
            })
            .catch(function(err){
                reject(err);
            });


        });
        
       
    }
    changeAmount(amount){
        this.amount=amount;
    }
    changefirstCurrency(newfirstCurrency){
        this.firstCurrency=newfirstCurrency;
    }
    changesecondCurrency(newsecondCurrency){
        this.secondCurrency=newsecondCurrency;
    }


}