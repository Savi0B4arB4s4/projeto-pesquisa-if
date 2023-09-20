class Mesa
{
    //paramentos para configurar variaveis internas 
    constructor(material,altura,largura,profundidade,pernas,cor)
    {
        //this significa variavel interna da classe 
        this.material=material;
        this.altura=altura;
        this.largura=largura;
        this.profundidade=profundidade;
        //this.pernas=pernas;
        this.cor=cor;
    }
    //estes dois metodos são o corpotamento da classe 0
    regularAltura(novaAltura)
    {
        this.altura=novaAltura
    }

    verificarAltura()
    {
        console.log(`Nova altura ${this.altura}`)
        
    }
}
//defini 3 mesas 
const mesa1=new Mesa("madeira",1.0,1.7,0.5,4,"Mogamo");
mesa1.regularAltura(1.3);
mesa1.verificarAltura();
const mesa2=new Mesa("ferro",1.0,1.7,0.5,4,"preto");
mesa2.regularAltura(1.5);
mesa2.verificarAltura();
const mesa3=new Mesa("pedra",1.0,1.7,0.5,4,"Marmore");
mesa3.regularAltura(1.7);
mesa3.verificarAltura();