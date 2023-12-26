class Cliente {
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