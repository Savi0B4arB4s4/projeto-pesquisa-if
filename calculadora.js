const prompt=require('prompt-sync')();//importando funcionalidade de terminaçl

console.log('Qual operação deseja fazer?');
console.log('1 adição');
console.log('2 subtração');
console.log('3 multiplicação ');
console.log('4 divisão');
const escolha= prompt('');
//capturando o numero da escolha
const num1=prompt('Digite o primeiro numero');
const num2=prompt('Digite o outro numero');
const n1=Number(num1);//convertendo o string para numero
const n2=Number(num2);//convertendo o string para numero
if(escolha==="1")
console.log(n1+n2);
else if(escolha==="2")
console.log(n1-n2);
else if(escolha==="3")
console.log(n1*n2);
else
console.log(n1/n2);

