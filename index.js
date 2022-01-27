import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupança.js";
import { Conta } from "./Conta.js";

/*Através do construtor do nome e cpf eu consigo ja passar a no parenteses que chamando meu construtor  */
const cliente1 = new Cliente("Ricardo", 11122233309);


const contaCorrenteRicardo = new Conta(0,1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(Conta)
console.log(contaCorrenteRicardo);
