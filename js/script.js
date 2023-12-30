let container = document.getElementById("container")
let box = document.getElementById("box")

const busqueda = async () => {
    let response = await fetch("https://rickandmortyapi.com/api/character")
    let data = await response.json();
    data.results.forEach(element => {        
        crearElementos(element);
    });
}

document.addEventListener("DOMContentLoaded", busqueda);

function crearElementos(element) {
    let div = document.createElement("DIV");
    div.classList.add("box__card");
    div.id = "box__card";
    box.appendChild(div);

    let img = document.createElement("IMG");
    img.src = element.image;
    img.classList.add("img");
    div.appendChild(img);

    let name = document.createElement("P");
    name.textContent = element.name;
    div.appendChild(name);

    let species = document.createElement("P");
    species.textContent = element.species;
    div.appendChild(species);

    let favorites = document.createElement("BUTTON");
    favorites.textContent = "Favorito";
    favorites.classList.add("btn_favorito");
    div.appendChild(favorites);
}
