enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);
