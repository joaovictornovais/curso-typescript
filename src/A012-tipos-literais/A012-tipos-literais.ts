let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const;// eslint-disable-line

console.log(x, y);

const pessoa = {
  nome: 'João' as const,
  sobrenome: 'Novais',
};

console.log(pessoa);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
