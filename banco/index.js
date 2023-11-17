const mysql = require('mysql2');
let connection;
try{
// criar conexão
connection = mysql.createConnection
({
  host: 'localhost',
  user: 'root',
  database: 'escola'
});
console.log("Banco conectado");
ListarAlunosEntre14E18(14, 18);

}//fim do bloco try
catch(err)
{

err.stack="";
console.error(err.message);

}
function Inserir(Nome)
{
  connection.query(
    'INSERT INTO `aluno`(Nome) Value(?)',
    [Nome],
    function(err,results){
      if(err)
      throw new Error("Problema na inserção");
      else
      console.log("Registro Inserido");
    }
  );
}

function ListarID(idEspecifico)
{
  connection.query("SELECT * FROM aluno where id=?",
  [idEspecifico],
  function(err,results)
  
    {
      if(err) 
      throw new Error("Problema ao buscar registro");
      else if (results==0)
      throw new Error("Registro não encontrado");
      else console.log(results);
    }
    );  
}

//UPDATE

function AtualizarNome(Nome, ID)
{
  connection.query(
    "UPDATE aluno SET nome = ?"+
    " WHERE aluno.id = '?';",
   [Nome, ID],
   function(err,results)
   {
    if(err)
    throw new Error("Problema na atualização: "+err.message);
    else
    console.log("Registro Atualizado: "+results);
   }
  );
}

function ListarTodosAlunos()
{
  connection.query(
    "SELECT * FROM aluno",
    function(err,results)
    {
      if(err) 
      throw new Error("Problema ao apagar registro");
      else if (results==0)
      throw new Error("Tabela vazia");
      else console.log(results);
    }
    );  
}

function ListarAlunosMenoresQue14() {
  connection.query(
    "SELECT * FROM aluno WHERE idade < 14",
    [idadeLimite],
    function (err, results) {
      if (err)
        throw new Error("Problema ao listar alunos menores que 14 anos: " + err.message);
      else if (results.length === 0)
        throw new Error("Nenhum aluno encontrado com idade menor que 14 anos");
      else
        console.log(results);
    }
  );
}

function ListarAlunosEntre14E18() {
  connection.query(
    "SELECT * FROM aluno WHERE idade >= 14 AND idade <= 18",
    [idadeMinima, idadeMaxima],
    function (err, results) {
      if (err)
        throw new Error("Problema ao listar alunos entre 14 e 18 anos: " + err.message);
      else if (results.length === 0)
        throw new Error("Nenhum aluno encontrado com idade entre 14 e 18 anos");
      else
        console.log(results);
    }
  );
}
//Listar todos os cursos cadastrados no banco de dados