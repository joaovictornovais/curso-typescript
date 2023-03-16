// um any mais seguro, que você não sabe com antecendencia que tipo ele vai ter, sempre checar seu tipo!

let x: unknown;
x = 100;
x = 'Luiz';
x = 800;
const y = 800;

if (typeof x === 'number') {
  console.log(x + y);
}
