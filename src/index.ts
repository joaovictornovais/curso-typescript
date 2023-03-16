const carro: { gastoPorLitro: number; litroGasolina: number; km: number } = {
  gastoPorLitro: 6.5,
  litroGasolina: 40,
  km: 261,
};

function rodaOuNaoRoda(
  gastoPorLitro: number,
  litroGasolina: number,
  km: number,
): string {
  const formula = gastoPorLitro * litroGasolina;
  if (km < formula) {
    return `Você consegue rodar esses ${km}km's e sobrará ${
      formula - km
    }L de gasolina`;
  } else
    return `Você não consegue rodar ${km}km com ${litroGasolina}L de gasolina. Abasteça mais ${
      (km - formula) * gastoPorLitro
    }L`;
}

console.log(rodaOuNaoRoda(carro.gastoPorLitro, carro.litroGasolina, carro.km));
