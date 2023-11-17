var fs = require('fs');

fs.writeFile("C:\\arquivo\\meuarquivo.txt", "Hello, txt!", function(erro) {

    if(erro) {
        throw erro;
    }

    console.log("Arquivo salvo");
}); 
