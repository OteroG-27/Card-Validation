const validator = {
  isValid(CreditCardNumber){
    const newArray = CreditCardNumber.split('').reverse();
    let par = [],
        impar= [];
    // const card = newArray.map((number, index) => {
    //   if(index % 2 === 0){
    //     let numXDos = number * 2;
    //     if(numXDos > 9) {
    //       let numResta = numXDos - 9;
    //       par.push(parseInt(numResta))
    //     }else{
    //       par.push(parseInt(numXDos))
    //     }
    //   }else{
    //     impar.push(parseInt(number))
    //   }
    // });
    // let fucionArrays = [...par, ...impar];
    // const sumaNumberCard = fucionArrays.reduce(
    //   (acumulador, valoractual) => acumulador + valoractual, 0);
    // if (sumaNumberCard  % 10 === 0 ) {
    //   alert("Numero de targeta valido")
    //   // document.getElementById('numberTarget').classList.remove('numberInvalid');
    //   // document.getElementById('numberTarget').classList.add('numberValid');
    // } else {
    //   alert("Numero de targeta invalido")
    //   // document.getElementById('numberTarget').classList.add('numberInvalid');
    //   // document.getElementById('numberTarget').classList.remove('numberValid');
    // }
    console.log(newArray);
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
    // console.log(par);
    // console.log(impar);
    let fucionArrays = [...par, ...impar];
    // console.log(fucionArrays);
    const sumaNumberCard = fucionArrays.reduce(
      (acumulador, valoractual) => acumulador + valoractual, 0);
    if (sumaNumberCard  % 10 === 0 ) {
      alert("Numero de targeta valido")
      // document.getElementById('numberTarget').classList.remove('numberInvalid');
      // document.getElementById('numberTarget').classList.add('numberValid');
    } else {
      alert("Numero de targeta invalido")
      // document.getElementById('numberTarget').classList.add('numberInvalid');
      // document.getElementById('numberTarget').classList.remove('numberValid');
    }
  },
  maskify(CreditCardNumber){
    const newArray = CreditCardNumber.split('');
    console.log(newArray);
    newArray.fill('#', 0, newArray.length - 4)

    console.log(newArray);
  }
};

export default validator;
