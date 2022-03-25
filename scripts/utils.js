export default class Utils {
    constructor(){
        this.main = document.querySelector('#main');
        this.loader = this.main.querySelector('#loader');
        this.pokeContainer = document.querySelector('.poke-container');
        this.mySidenav = document.querySelector('#mySidenav');
        this.myRegions = this.mySidenav.querySelector('#myRegions');
        this.linkPokemons = this.myRegions.querySelectorAll('.link-text');
    }

    linkDisable(){
        //Disable all links
        for (let i = 0; i < this.linkPokemons.length; i++) {
            this.linkPokemons[i].classList.add('link-text-disabled');
        }
    }

    linkEnable(){
        //Enable all links
        for (let i = 0; i < this.linkPokemons.length; i++) {
            this.linkPokemons[i].classList.remove('link-text-disabled');
        }
    }     
    
    addLoader(){
        document.querySelector("#title-pokedex").style.marginBottom = '0.3em';

        if(!this.loader.querySelector('.wrapper')) 
            this.loader.innerHTML += ` 
                <div class="wrapper">
                    <div class="pokeball"></div>
                </div>
            `;
    }

    removeLoader(){
        this.load = this.loader.querySelector('.wrapper');
        if(this.load) this.load.remove();

        document.querySelector("#title-pokedex").style.marginBottom = '0%';
    }
    
    scrollToTop(){
        const scrollToTop = document.querySelector('#scroll-to-top');
        
        scrollToTop.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo(0, 0);
        });
    }
}