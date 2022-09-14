
let animalCheck = false;
let animalStopper = 0;


function fetchAnimal() {
    const url = `https://zoo-animal-api.herokuapp.com/animals/rand`;
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const animal = {
                name: data.name,
                image: data.image_link
            };
            
            if (animalStopper === 1) {
                getAnimal(animal);
                showAnimal(animal);
            }
        });
    animalStopper++;
}


function getAnimal(animal) {
    animalCheck = true;

    mainPage.style.display = "none";
    wordToBlanks(animal.name);
    showKeys();
}


function showAnimal(animal) {
    if (animalCheck) {
        animalImage = document.createElement("img");
        animalImage.id = "animalImage";
        animalImage.src = animal.image;
        spriteDiv.appendChild(animalImage);
    }
}


const animalButton = document.getElementById("randomAnimal");
animalButton.addEventListener("click", fetchAnimal, true);