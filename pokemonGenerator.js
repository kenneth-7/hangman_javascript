
let randPokemon = Math.floor(Math.random() * 151);
let stopper = 0;
let pokeCheck = false;

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
                showSprite(pokemon);
            }
            else { //stop 
            }
        });
        stopper++;
}

function getPokemon(pokemon) {
    fetchPokemon();
    pokeCheck = true;

    mainPage.style.display = "none";
    wordToBlanks(pokemon.name);
    showKeys();
}

function showSprite(pokemon) {
    if (pokeCheck) {
        pokeSprite = document.createElement("img");
        pokeSprite.id = "pokemonSprite";
        pokeSprite.src = pokemon.image;
        pokeSpriteDiv.appendChild(pokeSprite);
    }
}


const pokemonButton = document.getElementById("pickPokemon");
pokemonButton.addEventListener("click", getPokemon, true);
