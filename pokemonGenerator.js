
let randPokemon = Math.floor(Math.random() * 151);
let pokeCheck = false;
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
                image: data.sprites['front_default']
            };

            if (stopper === 1) {
                getPokemon(pokemon);
                showPokemon(pokemon);
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

function showPokemon(pokemon) {
    if (pokeCheck) {
        pokeSprite = document.createElement("img");
        pokeSprite.id = "pokemonSprite";
        pokeSprite.src = pokemon.image;
        spriteDiv.appendChild(pokeSprite);
    }
}


const pokemonButton = document.getElementById("randomPokemon");
pokemonButton.addEventListener("click", getPokemon, true);