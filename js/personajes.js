let main = document.getElementById("main")

class Personajes {
    constructor(codigo, nombre, tipo, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipo = tipo;
        this.imagen = imagen;
    }

    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }

    getImagen() {
        return this.imagen;
    }
    setImagen(imagen) {
        this.imagen = imagen;
    }
}

let listaFavoritos = JSON.parse(localStorage.getItem("clave"));

const crearFavoritos = () => {

    if (listaFavoritos == null) {
        let nada = document.createElement("p")
        nada.textContent = "Aún no tienes persoanjes favoritos"
        main.appendChild(nada);
    } else {
        listaFavoritos.forEach(personaje => {
            const card = document.createElement("div");
            card.classList.add("card");

            const nombre = document.createElement("p");
            nombre.textContent = "Nombre: " + personaje.nombre;

            const tipo = document.createElement("p");
            tipo.textContent = "Tipo: " + personaje.tipo;

            const imagen = document.createElement("img");
            imagen.src = personaje.imagen;
            imagen.classList.add("card__img")

            card.appendChild(nombre);
            card.appendChild(tipo);
            card.appendChild(imagen);

            main.appendChild(card);
        });
    }
}

document.addEventListener("DOMContentLoaded", crearFavoritos)