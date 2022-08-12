

let randPokemon = Math.floor(Math.random() * 150);
let stopper = 0;


function fetchPokemon() {

    const url = `https://pokeapi.co/api/v2/pokemon/${randPokemon}`;
    
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites['front_default']
            };

            if (stopper === 1) {
                getPokemon(pokemon);
            }
            else { //stop 
            }
        });
        stopper++
}


function getPokemon(pokemon) {
    fetchPokemon();

    mainPage.style.display = "none";
    wordToBlanks(pokemon.name);
    showKeys();
}


const pokemonButton = document.getElementById("pickPokemon");
pokemonButton.addEventListener("click", getPokemon, true);

//promises. arrow functions, fetch api 