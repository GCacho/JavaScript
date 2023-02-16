var calificacion = 7;
// IF
if (calificacion >= 6) {
    console.log("Pasaste el examen")
} else {
    console.log("Reprobaste el examen")
}
// Else IF
if (calificacion > 6) {
    console.log("Pasaste el examen")
} else if ( calificacion === 6 ) {
    console.log("Pansaste")
} else {
    console.log("Reprobaste el examen")
}
// If.rar
var resultado = calificacion >= 6 ? "Pasaste el examen" : "Reprobaste el examen";
console.log(resultado);
// Switch
switch (calificacion) {
    case 5:
        console.log("Reprobado con 5");
        break;
    case 6:
        console.log("Pansaste con 6");
        break;
    case 7:
        console.log("Pasaste con 7");
        break;
    default:
        console.log("Pues quien sabe xd");
}