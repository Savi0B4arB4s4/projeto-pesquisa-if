class Planta{
    constructor(especie, semente, terra, adubo, agua)
    {this.especie=especie;
        this.semente=semente;
        this.terra=terra;
        this.adubo=adubo;
        this.agua=agua}

    Sobreviver() {
        console.log("Hn hr de sobreviver");
    }
}

const minhaPlanta= new Planta("Rosa do Deserto", "adenium", "Areia", "Fertilizante orgânico", "adubo líquido" );
minhaPlanta.Sobreviver();