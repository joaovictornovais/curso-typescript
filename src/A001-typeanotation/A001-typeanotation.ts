/* eslint-disable */

// Tipos básicos, aonde ocorrem inferência de tipos.
let nome: string = 'João'; // Qualquer tipo de string
let idade: number = 12; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('Qualquer simoblo'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<Number> = [1, 2, 3];
let arrayDeNumeros2: Number[] = [4, 5, 6]
let arrayDeString: Array<String> = ['a', 'b']
let arrayDeString2: String[] = ['c', 'd']

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 19,
    nome: 'João',
};

// Funções
function soma(x: number, y: number) {
    return x + y
};
const soma2: (x: number, y: number) => number = (x, y) => x + y
