// Utilize Any apenas em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Oiii'));
console.log(showMessage(123));
