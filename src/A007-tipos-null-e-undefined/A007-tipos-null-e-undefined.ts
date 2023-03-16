// Null utilizamos de propósito no código, undefined apenas formatado, mas sempre evitar

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson2(
  firstName: string,
  lastName: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

if (typeof squareOfTwoNumber === 'number') {
  console.log(squareOfTwoNumber * 100);
} else {
  console.log('Conta inválida');
}
