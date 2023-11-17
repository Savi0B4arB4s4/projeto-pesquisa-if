//bom dia povo!
//vamos fazer exemplos de interações
//ou chamado laços de repetição 
//as principais estruturas são:
//for e while (trad:para e enquanto)
//as interações ou laços são usados para
//iterar listas de objetos. b
//as listas são cpnhecidas como......
//............? Arrays  :)
//Bora fazer os exemplos ;)
//Hoje é aula sem dialogo, vou sar as tecnologias
//para me auxiliar

//Arrays 
//Em javascript são listas de vários tipos de 
// objetos a diferentes a difrença de outras liguagens
//js permite listas de vários objetos diferentes 
var alunos=["Marcos" , "José" , "Marina" , "Josefa"];
var idades=[18,19,16,34];
var temperaturas=[12.5,18,0,27.7];
//nestes exemplos acima, cada lista possui objetos dp mesmo 
//tipo(string,inteiros,numeros reais)
//em ordem de apresentação 
var variosObjetos=["Maçã",14,true,null,{nome:"Felipe"}];
//este ultimo exemplo representa uma lista com varios 
//tipos de objetos (string,inteiro,booleano,nulo,objeto jsson)


//maneiras de declarar arrays
//1) criar array vazio primeiro e depois colocar objetos 
//2) criar array e inicializar logo com objetos


//1)
var carros=[];//array vazio, sem nada
carros[0]="Lamborghini";
carros[1]="Jaguar";
carros[2]="Volvo";
carros[3]="Mercedes";
var motos= new Array();//outra maneira de declarar uma lista
motos[0]="Kawasaki";
motos[1]="Harley";
motos[2]="Ducati";
//as duas maneiras maneiras fazem a mesma coisa
//uma vez q temos as listas podemos fazer algumas operações
//modificando a lista carros que ja declaramos 
console.log(carros[2]);//vai imprimir Volvo
carros[2]="Fiat";//a partir de agora o elemento 2 da lista
//vai alterar o valor de Volvo para Fita, só testar 
console.log(carros[2]);//agora imprime Fiat
//como imprime a lista inteira?
console.log(carros);
console.log(motos);
//Os arrays tem tamanho dinâmico,ou seja, pode aumentar 
//ou diminuir o numero de elementos.
//para descobrir o tamanho usar .legth
var tamanhoCarros=carros.length;
var tamanhoMotos=motos.length;
console.log(`Elementos array carros ${tamanhoCarros}`);
console.log(`Elementos array carros ${tamanhoMotos}`);
//como saber qual é o ultimo elemento de uma lista 
//que não se sabe o tamanho?
var ultimoCarro=carros[carros.length-1];
//resumindo: lista[tamanho-1];
console.log(ultimoCarro);
//Como inserir um elemento no final da se 
//não sabemos o tamanho? usar.push()
console.log(motos.length);//aqui o array tem tamanho 3
motos.push("Aprilia"),//aqui adicionamos esse elemento 
console.log(motos.length);//aqui o array tem tamanho 4
//Aprilia fica no ultimo lugar 



//Como iterar uma lista? 
//Como imprimir todos os elementos?
//Vamos imprimir todos os carros da lista anterior
for(var i=0;i<=carros.length;i++)
{
      console.log(carros[i]);   
}
//agora vamos usar o while
var i=0
while(i<=carros.length)
{
    console.log(carros[i]);
    i++:
}
//vamos usar mais uma maneira, foreach
function imprimirCarros(carro)
{
    console.log(carro);
}
carros.forEach(imprimirCarros);