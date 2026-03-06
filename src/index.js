const Telefone = require('./models/Telefone');
const Endereco = require('./models/Endereco');
const Cliente = require('./models/Cliente');
const Empresa = require('./models/Empresa');

const enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Av. Cassiano Ricardo', '1000');
const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-90', enderecoEmpresa);

empresa.telefones.add(new Telefone('12', '3939-1111'));
empresa.telefones.add(new Telefone('12', '3939-2222'));


const endJoao = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '987');
const joao = new Cliente('João', '111.111.111-11', endJoao);
joao.telefones.add(new Telefone('12', '99999999')); 
joao.telefones.add(new Telefone('12', '99999999')); 
empresa.clientes.add(joao); 

const endGabriel = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '412');
const gabriel = new Cliente('Gabriel', '222.222.222-22', endGabriel);
gabriel.telefones.add(new Telefone('12', '88888888')); 
gabriel.telefones.add(new Telefone('12', '88888888')); 
empresa.clientes.add(gabriel);

const endKauan = new Endereco('SP', 'São José dos Campos', 'Av São João', '789');
const kauan = new Cliente('Kauan', '333.333.333-33', endKauan);
kauan.telefones.add(new Telefone('12', '77777777')); 
kauan.telefones.add(new Telefone('12', '77777777')); 
empresa.clientes.add(kauan); 

const endDavi = new Endereco('SP', 'São José dos Campos', 'Av Andromeda', '452');
const davi = new Cliente('Davi', '444.444.444-44', endDavi);
davi.telefones.add(new Telefone('12', '66666666'));
davi.telefones.add(new Telefone('12', '66666666'));
empresa.clientes.add(davi); 

const endIsaque = new Endereco('SP', 'São José dos Campos', 'Rua das Flores', '123');
const isaque = new Cliente('Isaque', '555.555.555-55', endIsaque);
isaque.telefones.add(new Telefone('12', '55555555'));
isaque.telefones.add(new Telefone('12', '55555555'));
empresa.clientes.add(isaque); 

console.log(empresa.detalhe());