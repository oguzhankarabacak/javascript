let value;
value=document;
//Scriptler

value=document.scripts;
value=document.scripts.length;

//Link
value=document.links;
value=document.links[document.links.length-1].getAttribute("class"); //son linkin class özelliği gelecek
//veya kısa yöntem  //,,,.className
value=document.links[document.links.length-1].classList; //burada classları listeliyor

//Form
value=document.forms;
value=document.forms[0].getAttribute("href");

value=document.forms["deneme"]; //name=form olan formları getir
value=document.forms[0].id;
//veya
value=document.forms[0].getAttribute("id");

value=document.forms[0].method; //get mi post mu


console.log(value);

