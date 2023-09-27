// Usando uma Classe (ES6)
class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  
    exibirDetalhes() {
      console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
  }
  
  // Criando um objeto de produto (produto1) a partir da classe Produto
  const produto1 = new Produto("Celular", 999);
  produto1.exibirDetalhes();
  
  // Usando uma Factory Function
  function criarProduto(nome, preco) {
    return {
      nome,
      preco,
      exibirDetalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
      }
    };
  }
  
  // Criando um objeto de produto (produto2) usando a função criarProduto
  const produto2 = criarProduto("Notebook", 1499);
  produto2.exibirDetalhes();
  
  // Usando Object.create
  const produtoProto = {
    exibirDetalhes() {
      console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
  };
  
  // Criando um objeto de produto (produto3) usando Object.create
  const produto3 = Object.create(produtoProto);
  produto3.nome = "Fone de Ouvido";
  produto3.preco = 99;
  
  produto3.exibirDetalhes();
  