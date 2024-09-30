/*definizione variabili*/
let num_km;
let age;
const price_km = 0.21;
const sale_minor = 0.20;
const sale_over = 0.40;
var price_nosale;
var final_price;

/*prendere le informazioni dall'utente*/

num_km = prompt("Quanti km vuole percorrere?");
console.log(num_km);
age = prompt("Quanti anni hai?")
console.log(age);

/*calcolo prezzo*/
price_nosale = num_km * price_km;

if(age < 18){
    final_price = price_nosale - (price_nosale * sale_minor);
    console.log(final_price.toFixed(2));
}else if(age > 65){
    final_price = price_nosale - (price_nosale * sale_over);
    console.log(final_price.toFixed(2));
}else{
    console.log(price_nosale.toFixed(2));
}




