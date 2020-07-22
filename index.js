'use strict';

/*//preparar cafe
let nombreDelCafe='';
nombreDelCafe = prompt('Ingrese el cafe que desea');

function hacerCafe (nombreDelCafe){
    return `Aquí está su ${nombreDelCafe}, que lo disfrutes`;

}
console.log(hacerCafe(nombreDelCafe));

//funcion sin parametro
function saludo (){
    return `hola`;

}
console.log(saludo());

//funcion con parametros
let numeroUno = 0;
let numeroDos = 0;

numeroUno = parseInt(prompt(numeroUno));
numeroDos = parseInt(prompt(numeroDos));
function sumar (numeroUno, numeroDos){
    return numeroUno + numeroDos;



}
console.log(sumar(numeroUno, numeroDos));


/*let nombre = `Paola`;
let age = 26;
let haveChldren = false;
let studies = {
    nombre: `udea`,
    años: 5,

}
let monts = [`enero`, `febrero`, `marzo`]
console.log(age);
console.log(nombre);
console.log(haveChldren);
console.log(estudies);
console.log(monts[0]);*/



//funciones anonimas
const sum = function (a,b){
    return a + b;
    

}
console.log(sum(2, 3));


//parametros y valores retorno
function multiplicacion (a,b){
    const result = a * b;
    return result;

}
console.log(multiplicacion(5, 6));


//ambitos de las variables 
const variableGlobal = `soy global`;


//asegurarnos que entre en un bloque if(condicional)

if (2 === 2){
    const variableGlobal = `realmente no soy global`;
    const variableNoGlobal = `no soy global`;

    //devolver

    console.log(variableGlobal);
    console.log(variableNoGlobal);

}