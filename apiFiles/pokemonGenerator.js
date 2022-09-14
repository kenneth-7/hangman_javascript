
let randGen1 = Math.floor(Math.random() * 151+1);
let randGen2 = Math.floor(Math.random() * (252-152) + 152);
let randGen3 = Math.floor(Math.random() * (387-252) + 252);
let randGen4 = Math.floor(Math.random() * (495-387) + 387);
let randGen5 = Math.floor(Math.random() * (650-495) + 495);
let pokeCheck = false;
let stopper = 0;


function fetchPokemon(gen) {
    const url = `https://pokeapi.co/api/v2/pokemon/${gen}`;
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
                getPokemonGen1(pokemon);
                showPokemon(pokemon);
            }
        });
    stopper++;
}


function getPokemonGen1(pokemon) {
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

function selectPokemon() {
    pokemonDiv.style.display = "block";
    selectDiv.style.display = "none";
}


const pokemonDiv = document.getElementById("pokemonDiv");
pokemonDiv.style.display = "none";

const pokemonButton = document.getElementById("randomPokemon");
pokemonButton.addEventListener("click", selectPokemon, true);

const gen1Button = document.getElementById("pokemonGen1");
gen1Button.addEventListener("click", fetchPokemon.bind(null, randGen1), true);

const gen2Button = document.getElementById("pokemonGen2");
gen2Button.addEventListener("click", fetchPokemon.bind(null, randGen2), true);

const gen3Button = document.getElementById("pokemonGen3");
gen3Button.addEventListener("click", fetchPokemon.bind(null, randGen3), true);

const gen4Button = document.getElementById("pokemonGen4");
gen4Button.addEventListener("click", fetchPokemon.bind(null, randGen4), true);

const gen5Button = document.getElementById("pokemonGen5");
gen5Button.addEventListener("click", fetchPokemon.bind(null, randGen5), true);