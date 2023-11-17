let numeros = [];
var num = 0;
const prompt = require("prompt-sync")();
num= parseInt(prompt('Insira um numero'));
while (num !==0){
    num = parseInt(prompt("Digite um número inteiro (ou 0 para sair)"));
    numeros.push(num);
   
   
}
let soma = 0;
for(let i =0; i<numeros.length; i++){
    soma +=numeros[i] ;
}
console.log (soma);
let media = soma /numeros.length;
console.log (media);

