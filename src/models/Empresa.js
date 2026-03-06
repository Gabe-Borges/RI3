class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = String(razaoSocial);
        this.nomeFantasia = String(nomeFantasia);
        this.#cnpj = String(cnpj);
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() {
        return this.#cnpj;
    }

    getRazaoSocialUpperCase() { return this.razaoSocial.toUpperCase(); }
    getRazaoSocialLowerCase() { return this.razaoSocial.toLowerCase(); }
    getNomeFantasiaUpperCase() { return this.nomeFantasia.toUpperCase(); }
    getNomeFantasiaLowerCase() { return this.nomeFantasia.toLowerCase(); }
    getCnpjUpperCase() { return this.#cnpj.toUpperCase(); }
    getCnpjLowerCase() { return this.#cnpj.toLowerCase(); }

    detalhe() {
        let desc = `Razão Social: ${this.razaoSocial}\n`;
        desc += `Nome fantasia: ${this.nomeFantasia}\n`;
        desc += `--------------------------------------------------\n`;
        
        this.clientes.forEach(cliente => {
            desc += `Nome: ${cliente.nome}\n`;
            desc += `Estado: ${cliente.endereco.estado}\n`;
            desc += `Cidade: ${cliente.endereco.cidade}\n`;
            desc += `Rua: ${cliente.endereco.rua}\n`;
            desc += `Número da Residência: ${cliente.endereco.numero}\n`;
            
            cliente.telefones.forEach(tel => {
                desc += `Número de Telefone: (${tel.ddd}) ${tel.numero}\n`;
            });
            desc += `\n`;
        });
        
        return desc;
    }
}

module.exports = Empresa;