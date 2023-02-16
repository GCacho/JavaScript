// Variables
var nombre = "Guillermo";
var edad = 27;
var edadx2 = edad + edad; 
var declaracion;

// Conversion de Datos
String(edad);
Number(edad);
Boolean(declaracion);

// Ver tipo de Dato
typeof(nombre);

// Funciones Declarativas
function miFuncionDeclarativa(a,b){
    var resultado = a + b;
    return resultado;
}
miFuncionDeclarativa(2,5)

// Funcion Expresiva
var nombre = function(name){
    console.log('Mi Nombre es', name);
}
nombre('Guillermo');

// Imprimir en Consola
console.log("Hola Mundo!");
console.log('Mi Nombre es', nombre);
console.log('Mi Nombre es ' + nombre);