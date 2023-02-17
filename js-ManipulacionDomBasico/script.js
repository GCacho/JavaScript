const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('#btnCalcular');
const res = document.querySelector('#resultado');
const form = document.querySelector('#formulario')

form.addEventListener('submit', sumarInputs);

function sumarInputs(event){
    event.preventDefault(); // Evita el refresco automatico del formulario
    const sumaInputs = Number(num1.value) + Number(num2.value);
    res.innerText = "Resultado = " + sumaInputs;
}