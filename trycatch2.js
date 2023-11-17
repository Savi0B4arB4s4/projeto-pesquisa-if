const nomedomEs = function(mes){
      const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
      if (meses[mes]  !== undefined){
        return meses[mes-1];
      } else{
        throw new Error('Mês ivalido');//dispara erro
      }
}

try{
    console.log(nomedomEs(4));
}catch(err){
    console.log(err);
}finally{console.log ('exemplo terminado')};