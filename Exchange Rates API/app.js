//Elementleri Seçme

const amountElement=document.getElementById("amount");
const firstSelect=document.querySelector("#firstCurrency");
const secondSelect=document.querySelector("#secondCurrency");

const currency=new Currency("USD","TRY");
const ui=new UI(firstSelect,secondSelect);
eventListener();

function eventListener(){
    amountElement.addEventListener("input",exchangeCurrency);  //amount değiştikçe input değiştikce
    firstSelect.onchange=function(){
        
        currency.changefirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
        //ilk para birimi her değiştiğinde resultta değişecek bunu ben yaptım
       
        currency.exchange()
        .then(result => {
            ui.changeResult(result);
        })
        .catch(err => console.log(err));

    };
    secondSelect.onchange=function(){
        
        currency.changesecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
        //ikinci para birimi her değiştiğinde resultta değişecek bunuda ben yaptım
        currency.exchange()
        .then(result => {
            ui.changeResult(result);
        })
        .catch(err => console.log(err));

    };
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);  //her değiştiğinde
    currency.exchange()
    .then(result => {
        ui.changeResult(result);
    })
    .catch(err => console.log(err));
    
    
}

