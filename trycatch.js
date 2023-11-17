//Tratamento 
try{
    //codigo que simula um erro

    let x = y + 1; //y não existe
} catch (err) {
    //codigo que executa se um erro for lançado 
    console.error("Erro-y não existe:"+err);
    //imprime o erro no console 
}finally {
    //codigo que executa depois do try ou catch
    console.log('fim do exemplo');
}
