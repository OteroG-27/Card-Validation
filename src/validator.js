const validator = {
  isValid(CreditCardNumber) {
    console.log(CreditCardNumber);
    const cardNumber = CreditCardNumber.split("").reverse().map(Number);
    console.log(cardNumber);
    let newArrayPar = [];
    let newArrayImpar = [];
    const isValidNumber = cardNumber.filter((number, i) => (i + 1) % 2 === 0).map((number) => number * 2);
    isValidNumber.forEach((newNumber) => {
      if (newNumber > 9) {
        let numResta = newNumber - 9;
        newArrayPar.push(numResta);
      } else {
        newArrayPar.push(newNumber);
      }
    });
    cardNumber.forEach((numberImpar, i) => (i+1) % 2 !== 0 && newArrayImpar.push(parseInt(numberImpar)));
    console.log(newArrayPar);
    console.log(newArrayImpar);
    const funcArray = [...newArrayPar, ...newArrayImpar];
    const sumaNumberCard = funcArray.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(sumaNumberCard);
    if (sumaNumberCard % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(CreditCardNumber) {
    return CreditCardNumber.split("").fill("#", 0, CreditCardNumber.length - 4).join("");
  },
};
export default validator;
