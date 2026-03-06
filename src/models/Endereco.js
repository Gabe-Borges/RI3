class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = String(estado);
        this.cidade = String(cidade);
        this.rua = String(rua);
        this.numero = String(numero);
    }
 
    getEstadoUpperCase() { return this.estado.toUpperCase(); }
    getEstadoLowerCase() { return this.estado.toLowerCase(); }
    getCidadeUpperCase() { return this.cidade.toUpperCase(); }
    getCidadeLowerCase() { return this.cidade.toLowerCase(); }
    getRuaUpperCase() { return this.rua.toUpperCase(); }
    getRuaLowerCase() { return this.rua.toLowerCase(); }
    getNumeroUpperCase() { return this.numero.toUpperCase(); }
    getNumeroLowerCase() { return this.numero.toLowerCase(); }
}

module.exports = Endereco;