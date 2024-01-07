let container = document.getElementById("container")
let box = document.getElementById("main")
let btn_favorito = document.getElementById("btn_favorito")

let listaFavorito = [];
personajefavorito = null;

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
    favorites.id = "btn_favorito";
    favorites.classList.add("btn_favorito");
    div.appendChild(favorites);
}

const busqueda = async () => {
    let response = await fetch("https://rickandmortyapi.com/api/character")
    let data = await response.json();
    data.results.forEach(element => {
        crearElementos(element);
    });
}

const anadirItem = (event) => {
    if (event.target.nodeName == "BUTTON") {
        personajefavorito = {
            nombre: event.target.previousElementSibling.previousElementSibling.textContent,
            tipo: event.target.previousElementSibling.textContent,
            imagen: event.target.previousElementSibling.previousElementSibling.previousElementSibling.src,
        };
        listaFavorito.push(personajefavorito);

        guardarLocal(listaFavorito)
    }
}
function guardarLocal(listaFavorito) {
    const favoritoString = JSON.stringify(listaFavorito);
    localStorage.setItem("clave", favoritoString);
}

document.addEventListener("click", anadirItem)
document.addEventListener("DOMContentLoaded", busqueda);