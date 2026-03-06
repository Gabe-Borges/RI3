class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = String(nome);
        this.#cpf = String(cpf);
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get cpf() {
        return this.#cpf;
    }
 
    getNomeUpperCase() { return this.nome.toUpperCase(); }
    getNomeLowerCase() { return this.nome.toLowerCase(); }
    getCpfUpperCase() { return this.#cpf.toUpperCase(); }
    getCpfLowerCase() { return this.#cpf.toLowerCase(); }
}

module.exports = Cliente;