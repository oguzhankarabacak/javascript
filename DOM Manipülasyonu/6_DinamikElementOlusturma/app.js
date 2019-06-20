const newlink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];
newlink.id="clear-todos";  //a etiketine id ekledik
newlink.className="btn btn-danger";
newlink.href="https://www.google.com.tr";
newlink.target="_blank";
cardbody.appendChild(document.createElement("br"));  //önce boşluk oluşturup sonra onu cardbody'e atadık

//Textnode
const text=document.createTextNode("naber");   //Textnode text ekledik normal text hiçbir özelliği yok
cardbody.appendChild(text);  //cardbodyinin en sonuna texti ekledik
//cardbody.textContent="naber";  //üstteki yaptığımızın(2 satır) aynısı  ama bu yöntem güvenli değil 

newlink.appendChild(document.createTextNode("farklı sayfaya git"));  //yeni oluşturduğumuz a'ya text özelliği ekledik
cardbody.appendChild(newlink);  //şimdi bütün özellikleriyle birlikte cardbody'e a elementini ekledik


console.log(cardbody);


