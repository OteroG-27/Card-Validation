const validator = {
  isValid(CreditCardNumber){
    const newArray = CreditCardNumber.split('').reverse();
    let par = [],
        impar= [];
    console.log(newArray);


    const card = newArray.map((number, index) => {
      if(index % 2 === 0){
        par.push(number)
      }else{
        impar.push(number)
      }
    });
    console.log(par);
    console.log(impar);
    console.log([...par, ...impar])

  //  const card = (arreglo) => {
  //     const arrFiltrado = arreglo.filter((num, index) => index % 2 == 0)
  //     return arrFiltrado
  //   }
    // console.log(par.push(card(newArray)));
    // console.log(par);

  },

























  // maskify: function(){
  // }
};
export default validator;
