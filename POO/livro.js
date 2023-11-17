class Livro{
    constructor(autor, titulo, ano)
    {this.autor=autor;
        this.titulo=titulo;
        this.ano=ano;}

    retornaInfoLivro(){
        return this.titulo+" "+this.autor+" "+this.ano;
    }
}
const Livro1= new Livro("Vidas Secas", "Graciliano Ramos", "1938");
Livro1.retornaInfoLivro();
const Livro2= new Livro("A Biblioteca da Meia-Noite", "Matt Haig", "2020");
Livro2.retornaInfoLivro();