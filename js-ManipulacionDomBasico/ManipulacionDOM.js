// Leer elementos del HTML
const title = document.querySelector('h1');
const parrafo = document.querySelector('p');
const parrafito = document.querySelector('.parrafin');
const pid = document.querySelector('#pid');
const input = document.querySelector('.inputclass');

// Mostrar en consola los elementos y sus atributos 
console.log(title);
// Ojo con las llaves {} Para convertirlo en objeto y ver sus atributos desde consola
console.log({ 
    title,
    parrafo,
    parrafito,
    pid,
    input
});

// Cambiar valores/atributos/clases de elementos y obtenerlos
input.value = "Valor por defecto desde js";
console.log(input.value);

title.innerHTML = "Hola Mundo <br> desde JS"; // Cambia el HTML
parrafo.innerText = "Hola Mundo <br> desde JS"; // Cambia el texto sin afectar HTML
console.log(title.getAttribute('patata')); // Obtiene el atributo de patata en titulo
parrafito.setAttribute('parrafin', 'AtributoNuevoAlv'); // Cambia el atributo
console.log(parrafito.getAttribute('parrafin')); // Muestra el atributo de parrafin

title.classList.add('NuevaClaseAlv'); // Agrega una clase extra a title
title.classList.remove("NuevaClaseAlv") // Borra la clase extra de title

// insertar imagen a traves de html
const img = document.createElement('img');
img.setAttribute('src','https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg');
pid.innerHTML=''; // Borra el parrafo pero para dejar solo el append de abajo
pid.append(img); // Agrega el elemento despues del contenido (no borra el parrafo en este caso)

