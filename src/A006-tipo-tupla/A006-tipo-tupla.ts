// Tuple
const dadosCliente1: readonly [number, string] = [1, 'João Victor'];
const dadosCliente2: [number, string, string] = [2, 'João Victor', 'Novais'];
const dadosCliente3: [number, string, string?] = [2, 'João Victor'];
const dadosCliente4: [number, string, ...string[]] = [
  2,
  'João Victor',
  'Novais',
  'dos',
  'Santos',
];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Novais', 'João'];
const array2: ReadonlyArray<string> = ['Novais', 'João'];

console.log(array1);
console.log(array2);
