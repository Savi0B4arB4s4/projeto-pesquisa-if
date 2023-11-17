// Parte 1: Classes para representar a biblioteca
class Livro {
    constructor(titulo, autor, isbn) {
      this.titulo = titulo;
      this.autor = autor;
      this.isbn = isbn;
    }
  }
  
  class User {
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.livros = [];
      this.usuarios = [];
      this.emprestimoLivro = [];
    }
  
    adicionarLivro(titulo, autor, isbn) {
      const livro = new Livro(titulo, autor, isbn);
      this.livros.push(livro);
    }
  
    adicionarUsuario(nome, cpf) {
      const user = new User(nome, cpf);
      this.usuarios.push(user);
    }
  
    emprestarLivro(livro, user) {
      const index = this.livros.indexOf(livro);
      if (index !== -1) {
        this.livros.splice(index, 1);
        this.emprestimoLivro.push({ livro, user });
        console.log(`Livro "${livro.titulo}" emprestado para ${user.nome}.`);
      } else {
        console.log("Livro não encontrado na biblioteca.");
      }
    }
  }
  
  // Exemplo de uso para a parte 1:
  const minhaBiblioteca = new Biblioteca();
  minhaBiblioteca.adicionarLivro("Harry Potter", "J.K. Rowling", "123456");
  minhaBiblioteca.adicionarLivro("Senhor dos Anéis", "J.R.R. Tolkien", "789012");
  minhaBiblioteca.adicionarUsuario("João", "12345");
  const livroParaEmprestar = minhaBiblioteca.livros[0];
  const usuarioEmprestimo = minhaBiblioteca.usuarios[0];
  minhaBiblioteca.emprestarLivro(livroParaEmprestar, usuarioEmprestimo);
  
  // Parte 2: Classes para representar compras e passagens
  class Comprador {
    constructor(CPF, Nome) {
      this.CPF = CPF;
      this.Nome = Nome;
    }
  }
  
  class Compra {
    constructor(Comprador) {
      this.Comprador = Comprador;
    }
  
    valorTotal() {
      return 0; // Você pode adicionar a lógica real de cálculo aqui
    }
  }
  
  class Passagem {
    constructor(Comprador, Compra, Preco, Codigo, Origem, Destino, Data, Hora) {
      this.Comprador = Comprador;
      this.Compra = Compra;
      this.Preco = Preco;
      this.Codigo = Codigo;
      this.Origem = Origem;
      this.Destino = Destino;
      this.Data = Data;
      this.Hora = Hora;
    }
  
    valorTotal() {
      return this.Compra.valorTotal();
    }
  }
  
  // Exemplo de uso para a parte 2:
  const comprador1 = new Comprador("2112", "João");
  const compra1 = new Compra(comprador1);
  const passagem1 = new Passagem(comprador1, compra1, 100.0, "Cod1", "Origem1", "Destino1", "Data1", "Hora1");
  
  console.log("Nome do Comprador: " + passagem1.Comprador.Nome);
  console.log("Valor Total da Passagem: " + passagem1.valorTotal());
  