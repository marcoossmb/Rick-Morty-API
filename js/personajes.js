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