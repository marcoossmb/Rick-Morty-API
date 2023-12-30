class Usuario {
    constructor(codigo, nombre, apellidos, email) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
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

    getApellidos() {
        return this.apellidos;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}

let usuarios = [];
const tablaBody = document.getElementById('tabla__body');
const fecha = new Date()

let horas = ("0" + fecha.getHours()).slice(-2)
let minutos = ("0" + fecha.getMinutes()).slice(-2)
let segundos = ("0" + fecha.getSeconds()).slice(-2)

const renderUsuarios = () => {
    tablaBody.innerHTML = '';

    usuarios.forEach(usuario => {
        const row = document.createElement('tr');

        const nombreCell = document.createElement('td');
        nombreCell.textContent = usuario.getNombre();
        nombreCell.classList.add("tabla__td")
        row.appendChild(nombreCell);

        const apellidosCell = document.createElement('td');
        apellidosCell.textContent = usuario.getApellidos();
        apellidosCell.classList.add("tabla__td")
        row.appendChild(apellidosCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = usuario.getEmail();
        emailCell.classList.add("tabla__td")
        row.appendChild(emailCell);

        const horaCell = document.createElement('td');
        horaCell.textContent = horas + ":" + minutos + ":" + segundos;
        horaCell.classList.add("tabla__td")
        row.appendChild(horaCell);

        tablaBody.appendChild(row);
    });
};

const getUsuarios = async () => {
    let response = await fetch("https://fakerapi.it/api/v1/persons");
    let respuesta = await response.json();
    respuesta.data.forEach(usuario => {
        let objUsuario = new Usuario(usuario.id, usuario.firstname, usuario.lastname, usuario.email)
        usuarios.push(objUsuario);
    });

    renderUsuarios();
};

document.addEventListener("DOMContentLoaded", getUsuarios);