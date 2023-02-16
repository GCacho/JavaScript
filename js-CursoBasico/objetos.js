var nombre = "Guillermo";
var edad = 27;
var edadx2 = edad + edad; 
// Arreglos
var elementos = [nombre, edad, edadx2]; 
elementos[0];
elementos.length;
elementos.push("Nuevo Elemento al final de la lista");
elementos.pop("Nuevo Elemento al final de la lista"); 
elementos.unshift("Nuevo Elemento al principio de la lista");
elementos.shift("Nuevo Elemento al principio de la lista");
elementos.indexOf("Guillermo");

// Biblioteca - Objetos
var persona = { 
    nombre:"Guillermo",
    apellido: "Cacho",
    edad: 27,
    observaciones: function(){
        console.log("Alumno: " + this.nombre + " | Edad: " + this.edad);
    }
}
persona.nombre;
persona.apellido;
persona.edad;
persona.observaciones();

// Funcion Constructora
function Person(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
var personaNueva = new Person("Pepe", 55);
personaNueva;
personaNueva.nombre;
personaNueva.edad;

// Recorrido de Arreglos
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]
// Filtrar
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
articulosFiltrados;
// Mapear
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
nombreArticulos;
// Metodo Find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});
encuentraArticulo;
// ForEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
// Some - Regresa una condicion
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
articulosBaratos;