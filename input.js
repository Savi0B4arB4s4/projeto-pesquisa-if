//npmjs é um site que serve para repositorio
//de programas em nodejs/javascript
//para instalar um desses pacotes vc precisa
//utilizar um comando via terminal:
//npm install nomepacote

//neste caso vamos instalar um pacote para o nodejs
//capturar uma entrada de dados no terminal
// npm instal prompt-sync no terminal 
//prompt-sync é o pacote que permite a captura de dados 
//no terminal

//criar uma variável chamada prompt que tera as funcionalidades 
//para inserir dados a partir do terminal
//require serve para importar o pacote instalado 
  const prompt = require('prompt-sync')();
//vamos criar a variavel nome para capturar o nome digitado 
  const name = prompt('qual seu nome?');
  //console.log serve para exibir o resultado da operação 
  console.log(`oi ${name}`);
 //no fim ctrl+s para salvar e digitar no terminal node input.js

 const idade= prompt('Qual é a sua idade?');
 console.log(`a sua idade é ${idade}`);//ctrl+s
 console.log(`Seu nome é ${name} e sua idade é ${idade}`);
 //ctrl+s para salvar e digitar no terminal node input.js

 const escola=prompt ('Onde você estuda');
 if(escola==="IF Goiano")
 console.log("Ótima escolha!");
 else
 console.log("Ainda está em tempo para se matricular!");
