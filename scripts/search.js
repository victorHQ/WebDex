function searchPokemons() {
    let input = document.querySelector('.searchInput').value;
    input= input.toLowerCase();
    let pokemonDiv = document.getElementsByClassName('pokemon');

      
    for (i = 0; i < pokemonDiv.length; i++) { 
        if (!pokemonDiv[i].innerHTML.toLowerCase().includes(input)){
            pokemonDiv[i].style.display="none";
        }
        else {
            pokemonDiv[i].style.display="block";            
        }
    }
}