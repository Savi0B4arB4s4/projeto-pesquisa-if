//fazer um programa que leia 3 numero 
//e os imprima em ordem
//decrescente
const prompt = require("prompt-sync")();

const numeros= prompt('Insira quantos numeros irá possuir array');




let arr = [];

// Função para buscar um elemento em um array
function buscarArray(array, elemento) {
  // Itera sobre cada elemento do array
  for (let i = 0; i < array.length; i++) {
    // Verifica se o elemento atual é igual ao elemento buscado
    if (array[i] === elemento) {
      // Retorna o índice do elemento encontrado
      return i;
    }
  }
  // Caso o elemento não seja encontrado, retorna -1
  return -1;

}
for (i = 0; i <
   Number (numeros); i++)
{
  const value= prompt(`Digite o numero ${i+1}:`);
  arr.push (Number(value));


}
let n1 ;
n1=prompt("Digite o valor a ser procurado");
const elementoBuscado =Number(n1);
const indiceElemento = buscarArray(arr, elementoBuscado);
if (indiceElemento !== -1) {
  console.log(`O elemento ${elementoBuscado} foi encontrado no índice ${indiceElemento} do array.`);
} else {
  console.log(`O elemento ${elementoBuscado} não foi encontrado no array.`);
}

