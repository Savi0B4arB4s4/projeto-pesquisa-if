class Carro{
    constructor(marca, modelo, combustivel, motor)
    {this.marca=marca;
        this.modelo=modelo;
        this.combustivel=combustivel;
        this.ano=this.ano}

    Andar() {
        console.log(`${this.marca} ${this.modelo} Acelerando...`);
    }
    frear(){
        console.log(`${this.marca} ${this.modelo} Feando....`);
    }
}

const carro1= new Carro("WV", "Jetta", "Flex", "1.4 tsi");
carro1.Andar();
carro1.frear();
const carro2= new Carro("Fiat", "UNO", "Flex", "1.0");
carro2.Andar();
carro2.frear();