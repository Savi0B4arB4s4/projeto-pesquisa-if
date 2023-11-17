//fazer um programa que leia 3 numero 
//e os imprima em ordem
//decrescente
const prompt = require("prompt-sync")();
const num1 = prompt('Digite um número');
const num2 = prompt('Digite outro número');
const num3 = prompt('Digite o ultimo numero');
var n1 = Number(num1);
var n2 = Number(num2);
var n3 = Number(num3);

let lista=[];//array vazio para colocar os valores
if ((n1 > n2) && (n1 > n2)){
lista[0]=n1;
if(n2>n3)
{
     lista[1]=n2;
}
} else if((n2>n1)&&(n2>n3))
{
     lista[0]=n2
     if(n1>n3)
     {
        lista[1]=n1;
        lista[2]=n3;
     }
} else if((n3>n1)&&(n3>n2))
{
    lista[0]=n3;
    if(n1>n2){
       lista[1]=n1;
       lista[2]=n2;

    }
}
console.log(lista);