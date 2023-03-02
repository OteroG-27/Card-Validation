const validator = {
  isValid(CreditCardNumber){
    const newArray = CreditCardNumber.split('').reverse();
    let par = [],
        impar= [];
    const isValidNumber = newArray.filter((number, i) =>  i % 2 == 0 ).map(number => number * 2);
    // console.log(isValidNumber);
    isValidNumber.forEach(newNumber => {
      if (newNumber > 9) {
        let numResta = newNumber - 9;
        par.push(parseInt(numResta))
      }else{
        impar.push(parseInt(newNumber))
      }
    });
    let fucionArrays = [...par, ...impar];
    const sumaNumberCard = fucionArrays.reduce(
      (acumulador, valoractual) => acumulador + valoractual, 0);
    if (sumaNumberCard  % 10 === 0 ) {
      alert("Numero de targeta valido")
    } else {
      alert("Numero de targeta invalido")
    }
  },
  maskify(CreditCardNumber){
    return CreditCardNumber.split('').fill('#', 0, CreditCardNumber.length - 4);
  }
};

export default validator;
