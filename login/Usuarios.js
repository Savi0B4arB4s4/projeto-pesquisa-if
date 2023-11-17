class Usuario
{
     constructor(nome, senha)
     {
       this.nome=nome;
       this.senha=senha;
     }
     //get set
     get retornaNome()
     
     {
       return this.nome;
     }
     set configurarNome(nome){
      if(nome==="" ||nome===null||nome===undefined)
      {
        console.error("Nome inválido")
      }else{
        this.nome=nome;
      }
{
        }
     }

     get retornaSenha()
     {
       return this.senha;
     }
     set configurarSenha(senha)
     {
      if(senha==="" ||senha===null||senha===undefined)
      {
        console.error("senha inválido")
      }else{
        this.senha=senha;
     }
    }
    
} 
module.exports=Usuario; 
//exportando classe