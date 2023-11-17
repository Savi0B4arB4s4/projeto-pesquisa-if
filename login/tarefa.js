const Usuario=require('./Usuarios');
const prompt=require ('prompt-sync')();
const listaUsuarios=
[
    new Usuario("Mario","123456"),
    new Usuario("Fabão","654321"),
    new Usuario("Luiz Calvo","987654")
 ] ;
console.log("Bem vindo(a) ao sistema de Login do IF Goiano");
let nome=prompt("Digite o nome:  ");
let senha=prompt("Digite a senha: ");
const usuario1= new Usuario();
usuario1.configurarNome=nome;
usuario1.configurarSenha=senha;
//verificar se existe o usuario
let acesso=false;
listaUsuarios.forEach(
    (u)=>{
        if(u.retornaNome===nome&&u.retornaSenha===senha)
        {
           acesso=true;
           return;
        }
    }

);
if (acesso===true)
{
        console.log("Bem vindo(a) ao sistema");
}
else
(
      console.log("Credenciais invalidas")
)
