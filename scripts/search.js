function searchPokemons() {
    let input = document.querySelector('.searchInput').value;
    let pokemonDiv = document.getElementsByClassName('pokemon');
    input= input.toLowerCase();

    for (i = 0; i < pokemonDiv.length; i++) { 
        if (!pokemonDiv[i].innerText.toLowerCase().includes(input)){
            pokemonDiv[i].style.display="none";
        }
        else {
            pokemonDiv[i].style.display="block";            
        }
    }
}

function filterTypes(type){
    let input = type.options[type.selectedIndex].innerText;
    let pokemonDiv = document.getElementsByClassName('pokemon');
    input = input.toLowerCase();        

    for (i = 0; i < pokemonDiv.length; i++) { 
        if(input === 'all') {
            input = '';
            pokemonDiv[i].style.display="block";
        }       

        if (!pokemonDiv[i].innerText.toLowerCase().includes(input)){
            pokemonDiv[i].style.display="none";
        }
        else {
            pokemonDiv[i].style.display="block";      
        }
    }
}