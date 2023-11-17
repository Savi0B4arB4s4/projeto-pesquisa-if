const mysql = require('mysql2');//pacote para mysql

let connection;//hospeda conexão mysql
//conexão
try{
connection = mysql.createConnection
  ({
    host: 'localhost',
    user: 'root',
    database: 'escola'
  });//cria a conexão e coloca na variavel connection
 
}//fim bloco try
catch(error)
{   error.stack="";//limpar pilha de execução
    console.error(error.message);   
}//fim bloco cacth



//INSERT
function Inserir(Nome, Idade, callback) {
  
  connection.query(
      'INSERT INTO Aluno (Nome, Idade) VALUES (?, ?)',
      [Nome, Idade],
      function(err, results) {
          if (err) {
          } else {
              callback(null, results.affectedRows); // Chama o callback com o número de linhas afetadas
          }
      }
  );
}


//DELETE
function Apagar(idAluno)
{
connection.query(
  "DELETE FROM aluno where aluno.id=?",
  [idAluno],
  function(err,results)
  {
    if(err) 
    throw new Error("Problema ao apagar registro");
    else
    console.log("Registro cancelado");
  }
  );  
}

//UPDATE
function Atualizar(ID, novoNome, callback) {
  connection.query(
    "UPDATE aluno SET Nome = ? WHERE ID = ?",
    [novoNome, ID],
    function (err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
}

function ListarTodosAlunos(callback)
{
  connection.query(
    "SELECT * FROM aluno",
    function(err,results)
    {
      if (err) {
        callback(err, null); // Chama o callback com erro
       } else {
        callback(null, results);
      } // Chama o callback com o resultado
    }
    );  
}
module.exports={Inserir, Apagar, ListarTodosAlunos, Atualizar};