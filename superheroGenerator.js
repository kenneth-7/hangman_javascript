
let randomSuperhero = Math.floor(Math.random() * 699);
let heroCheck = false;
let heroStopper = 0;


function fetchSuperhero() {
    const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomSuperhero}.json`;
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const superhero = {
                name: data.name,
                powerstats: data.powerstats,
                image: data.images.sm,
                id: data.id
            };


            if (heroStopper === 1) {
                getSuperhero(superhero);
                showSuperhero(superhero);
            } 
            console.log(superhero.name);
        });
    heroStopper++;
}


function getSuperhero(superhero) {
    fetchSuperhero();
    heroCheck = true;

    mainPage.style.display = "none";
    wordToBlanks(superhero.name);
    showKeys();
}

function showSuperhero(superhero) {
    if (heroCheck) {
        superheroImage = document.createElement("img");
        superheroImage.id = "superheroImage";
        superheroImage.src = superhero.image;
        spriteDiv.appendChild(superheroImage);
    }
}


const superheroButton = document.getElementById("randomSuperhero");
superheroButton.addEventListener("click", getSuperhero, true);

//  64, 67, 116, 132, 175, 190, 326, 328, 349, 515, 544, 614