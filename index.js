import validator from './validator.js';
const formulario = document.querySelector('#formulario-tarjeta'),
numeroTarjeta = document.querySelector('#tarjeta .numero'),
nombreTarjeta = document.querySelector('#tarjeta .nombre'),
monthExpiracion = document.querySelector('#tarjeta .month'),
yearExpiracion = document.querySelector('#tarjeta .year');

const BotonValidar = document.getElementById('btnValidar');
const BotonPagar = document.getElementById('btnPagar');


// Validacion
// Cada vez que hacemos un click en boton validar llama a la funcion 
document.getElementById("btnValidar").addEventListener("click", myFunction);
// Cada vez que tecleamos en input numero llama a la funcion 
document.getElementById("inputNumero").addEventListener("keyup", myFunction2);

function myFunction() {
    let creditCardNumber =''
    creditCardNumber =document.getElementById("inputNumero").value;
    let validation = validator.isValid(creditCardNumber);
    
    let maskify = validator.maskify(creditCardNumber);
    // console.log(maskify)


    if(creditCardNumber.length < 16) {
        alert('Número inválido, intente nuevamente');
    }
    else if(creditCardNumber.length === 0) {
        alert('Número inválido, intente nuevamente')
    }

    else if(validation === true) {
        alert('Tarjeta' + maskify + ' válida');
        //Mantiene valores en la tarjeta
        let nroContent = numeroTarjeta.textContent
        let nomContent = nombreTarjeta.textContent
        let monContent = monthExpiracion.textContent
        let yeaContent = yearExpiracion.textContent
        numeroTarjeta.textContent = nroContent
        nombreTarjeta.textContent = nomContent
        monthExpiracion.textContent =  monContent
        yearExpiracion.textContent = yeaContent
        //Limpia campo formulario
        formulario.inputNumero.value = ''
        //Desactiva Boton Validar o Activa Boton Pagar
        BotonValidar.disabled = true; 
        BotonPagar.disabled  = false

    }
    else {
        alert('Tarjeta' + maskify + ' inválida')
    }
}

function myFunction2(){
    //Crea variable vacia
    let creditCardNumber=''
    //le asigna lo que se escribe
    creditCardNumber =document.getElementById("inputNumero").value;
    // Entrega el valor a la funcion
    let maskify = validator.maskify(creditCardNumber);
    // Muestra el valor en la tarjeta
    numeroTarjeta.textContent = maskify;
}


