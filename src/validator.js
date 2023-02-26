const validator = {
  isValid(CreditCardNumber){
    const newArray = CreditCardNumber.split('').reverse();
    let par = [],
        impar= [];
    const card = newArray.map((number, index) => {
      if(index % 2 === 0){
        let numXDos = number * 2;
        if(numXDos > 9) {
          let numResta = numXDos - 9;
          par.push(parseInt(numResta))
        }else{
          par.push(parseInt(numXDos))
        }
      }else{
        impar.push(parseInt(number))
      }
    });
    let fucionArrays = [...par, ...impar];
    const sumaNumberCard = fucionArrays.reduce(
      (acumulador, valoractual) => acumulador + valoractual, 0);
    console.log(sumaNumberCard);
    if (sumaNumberCard  % 10 === 0 ) {
      // alert(true);
      document.getElementById('numberTarget').classList.add('numberValid');
    } else {
      // alert(false);
      document.getElementById('numberTarget').classList.add('numberInvalid');
    }


  },

























  // maskify: function(){
  // }
};
export default validator;
