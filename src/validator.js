const validator = {
  isValid(CreditCardNumber){
    const cardNumber = CreditCardNumber.split('');
    let newArray = [];
    const isValidNumber = cardNumber.filter((number, i) =>   i % 2 == 0 ).map(number => number * 2);
    isValidNumber.forEach(newNumber => {
      if (newNumber > 9) {
        let numResta = newNumber - 9;
        newArray.push(parseInt(numResta))
      }else{
        newArray.push(parseInt(newNumber))
      }
    });
    cardNumber.forEach((numberImpar, i)=> i % 2 !== 0 && newArray.push(parseInt(numberImpar)))
    const sumaNumberCard = newArray.reduce((acumulador, valoractual) => acumulador + valoractual, 0);
    if (sumaNumberCard  % 10 === 0 ) {
      alert("Numero de targeta valido")
    } else {
      alert('Introduzca un numero de tarjeta valido')
    }
  },
  maskify(CreditCardNumber){
    return CreditCardNumber.split('').fill('#', 0, CreditCardNumber.length - 4);
  }
};
export default validator;
