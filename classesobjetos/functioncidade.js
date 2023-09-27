// Usando uma Classe (ES6)
class Cidade {
    constructor(nome, populacao) {
      this.nome = nome;
      this.populacao = populacao;
    }
  
    exibirDetalhes() {
      console.log(`Cidade: ${this.nome}, População: ${this.populacao} habitantes`);
    }
  }
  
  // Criando objeto cidade1 a partir da classe Cidade
  const cidade1 = new Cidade("Nova York", 8.4e6);
  cidade1.exibirDetalhes();
  
  // Usando uma Factory Function
  function criarCidade(nome, populacao) {
    return {
      nome,
      populacao,
      exibirDetalhes() {
        console.log(`Cidade: ${this.nome}, População: ${this.populacao} habitantes`);
      }
    };
  }
  
  // Criando objeto cidade2 usando a função criarCidade
  const cidade2 = criarCidade("Paris", 2.2e6);
  cidade2.exibirDetalhes();
  
  // Usando Object.create
  const cidadeProto = {
    exibirDetalhes() {
      console.log(`Cidade: ${this.nome}, População: ${this.populacao} habitantes`);
    }
  };
  
  // Criando objeto cidade3 usando Object.create
  const cidade3 = Object.create(cidadeProto);
  cidade3.nome = "Tóquio";
  cidade3.populacao = 13.9e6;
  
  cidade3.exibirDetalhes();
  