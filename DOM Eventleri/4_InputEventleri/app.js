const filter=document.getElementById("filter");

//DOM content loaded   //sayfanın tamamı yüklenince event oluşuyor.örneğin sayfayı yenilediğimizde
document.addEventListener("DOMContentLoaded",load);
function load(e){
    console.log("sayfa yüklendi");
}

//focus   //input alanına odaklandığımız zaman event gerçekleşiyor

// filter.addEventListener("focus",run);

filter.addEventListener("select",run);
function run(e){
    console.log(e.type);
}


console.log(filter);


//blur --> odaktan çıkınca event olur
// paste --> input alanına birşey yapıştırdığımızda
//copy --> input alanından birşey kopyaladığımızda
//cut--> input alanından birşey kestiğimizde
//select --> yazının tamamını veya belirli bir kısmını seçtiğimizde event çalışıyor