import Utils from "./utils.js";

export default class Pokedex{
    constructor(){
        this.utils = new Utils(); //Instance of Utils.
        this.utils.scrollToTop(); 
        let pokemonNUMBER = 151; //Private variable for length of pokemonNumber.
        let pokemonIndex = 1; //Private variable for the national dex index.
        Object.defineProperty(this, 'pokemonNumber', {
            enumerable: true,
            get: () => {
                return pokemonNUMBER;
            },
            set: (value) => {
                if (typeof value !== 'number' || value === undefined) {
                    throw new Error('Tipo de variável inválido para o número de pokemons!');
                } else pokemonNUMBER = value;
            }
        });
        Object.defineProperty(this, 'index', {
            enumerable: true,
            get: () => {
                return pokemonIndex;
            },
            set: (value) => {
                if (typeof value !== 'number' || value === undefined) {
                    throw new Error('Tipo de variável inválido para o índice dos pokemons!');
                } else pokemonIndex = value;
            }
        });
        //Color object for pokemon cards.
        Object.defineProperty(this, 'colors', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: this.colors = {
                fire: '#fd7d24',
                grass: '#9bcc50',
                electric: '#f8d030',
                water: '#4592c4',
                ground: '#ab9842',
                rock: '#a38c21',
                fairy: '#fdb9e9',
                poison: '#b97fc9',
                bug: '#a8b820',
                dragon: '#53a4cf',
                psychic: '#f366b9',
                flying: 'linear-gradient(90deg, #bdb9b8 50%, #bee0ec 50%)', 
                fighting: '#c03028',
                normal: '#a8a878',
                ice: '#98d8d8',
                ghost: '#705898',
                dark: '#505050',
                steel: '#9eb7b8'
            },
        });
        //Main pokemon types
        this.mainTypes = Object.keys(this.colors);
    }

    async fetchPokemons(){
        this.utils.addLoader();
        //Disable links to wait for promises events.
        this.utils.linkDisable();
        //Clean the container for new regions.
        this.utils.pokeContainer.innerHTML = "";

        for (this.index; this.index <= this.pokemonNumber; this.index++) {
            await this.getPokemon(this.index);
        }

        this.utils.removeLoader();
        //Enable links
        this.utils.linkEnable();
    } 

    async getPokemon(id) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`; //Pokeapi with the specific pokemon json
        const res = await fetch(url); //Request
        const pokemon = await res.json(); //Response
        this.createPokemonCard(pokemon);
    }

    createPokemonCard(pokemon){
        const pokemonProperties = pokemon;
        const pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon');


        //Get as pokemon properties
        const pokeTypes = pokemonProperties.types.map(type => type.type.name); //Types
        const namePokemon = pokemonProperties.name[0].toUpperCase() + pokemonProperties.name.slice(1); //Name
        const color = this.colors[pokeTypes[0]]; //Color of card
    
        pokemonEl.style.background = color;
        
        //Card created
        this.pokeInnerHTML = `
            <div class="img-container">
                <img width="100%" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonProperties.id.toString().padStart(3, '0')}.png" alt="${namePokemon}" title="${namePokemon}"/>
            </div>
            <div class="info">
                <span class="number">#${pokemonProperties.id.toString().padStart(3, '0')}</span>
                <a href="https://www.pokemon.com/br/pokedex/${pokemonProperties.id}" target="_blank" class="name" title="${namePokemon}"><h3 class="name">${namePokemon}</h3></a>
                <div class="type">${this.pokemonTypes(pokeTypes)}</div>
            </div>
        `;

        pokemonEl.innerHTML = this.pokeInnerHTML;
        this.utils.pokeContainer.appendChild(pokemonEl);
    }

    pokemonTypes(pokeTypes){
        let span1 = `<span class="card-type" style="background: ${this.colors[pokeTypes[0]]};">${pokeTypes[0]}</span>`;
        let span2 = `<span class="card-type" style="background: ${this.colors[pokeTypes[1]]};">${pokeTypes[1]}</span>`;

        if(pokeTypes[1]){
            return span1 + span2;
        } else 
            return span1;
    }

    //Select Dex by regions
    selectPokemonRegions(){
        this.utils.myRegions.addEventListener('click', e => {
            e.preventDefault();
            let pokemonEvent = e.target;

            //Parse JSON of Regions
            //number: Maximum number of pokemon in the region
            //index: Region starter pokemon
            let regions = JSON.parse(data);

            switch (pokemonEvent) {
                case pokemonEvent.closest(regions.kanto.id):
                    this.pokemonNumber = regions.kanto.number;
                    this.index = regions.kanto.index;
                    this.fetchPokemons();
                    break;
                case pokemonEvent.closest(regions.johto.id):
                    this.pokemonNumber = regions.johto.number;
                    this.index = regions.johto.index;
                    this.fetchPokemons();
                    break;
                case pokemonEvent.closest(regions.hoenn.id):
                    this.pokemonNumber = regions.hoenn.number;
                    this.index = regions.hoenn.index;
                    this.fetchPokemons();
                    break;
                case pokemonEvent.closest(regions.sinnoh.id):
                    this.pokemonNumber = regions.sinnoh.number;
                    this.index = regions.sinnoh.index;
                    this.fetchPokemons();
                    break;
                case pokemonEvent.closest(regions.unova.id):
                    this.pokemonNumber = regions.unova.number;
                    this.index = regions.unova.index;
                    this.fetchPokemons();
                    break;
                case pokemonEvent.closest(regions.kalos.id):
                    this.pokemonNumber = regions.kalos.number;
                    this.index = regions.kalos.index;
                    this.fetchPokemons();
                    break;
                case pokemonEvent.closest(regions.alola.id):
                    this.pokemonNumber = regions.alola.number;
                    this.index = regions.alola.index;
                    this.fetchPokemons();
                    break;
                case pokemonEvent.closest(regions.galar.id):
                    this.pokemonNumber = regions.galar.number;
                    this.index = regions.galar.index;
                    this.fetchPokemons();
                    break;
                default:
                    break;
            }
        })
    }
}

