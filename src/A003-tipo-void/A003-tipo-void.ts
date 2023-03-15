function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'João Victor',
  sobrenome: 'Novais',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('João Victor', 'Novais');
pessoa.exibirNome();

export { pessoa };
