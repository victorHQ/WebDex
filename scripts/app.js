import Pokedex from "./pokedexClass.js";

class App{
    constructor(){
        this.pokedex = new Pokedex();
    }

    initiPokedex(){
        this.pokedex.fetchPokemons();
        this.pokedex.selectPokemonRegions();
    }
}

const app = new App();
app.initiPokedex();