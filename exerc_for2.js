//faça um programa que receba dois números
//inteiros e gere os
//números inteiros que estão no intervalo
//compreendido por eles
const prompt = require("prompt-sync")();
const num1 = prompt('Digite um número');
const num2 = prompt('Digite outro número');
var n1 = Number(num1);
var n2 = Number(num2);
while(n1 <= n2){
      console.log(n1);
      n1++;
}