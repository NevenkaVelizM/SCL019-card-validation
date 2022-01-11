const validator = {
  isValid: (creditCardNumber) => {
    creditCardNumber = creditCardNumber.replace(/\s/g, "");
    let convert = creditCardNumber.split('').reverse();
    let suma = 0;
    let n= 0;

for (let i = 0; i < convert.length; i++) {
    if (i % 2 === 1) {
      n = Number(convert[i] * 2);

      if (n >= 10) {
          n = (n + 10) + 1;
      }
      
    }else {
      n = Number(convert[i]);
    }

    suma = suma + n;
    }

  return suma % 10 === 0 ? true : false;
 },
 
 maskify: (creditCardNumber) => {
  let arr = creditCardNumber.split('');
  let string = '';

  for(let i = 0; i < arr.length; i++) {
    if(i < arr.length - 4) {
      string = string + '#';

    }else {
      string = string + arr[i];
    }
    
  }
  return string;
},
  
};

export default validator;

