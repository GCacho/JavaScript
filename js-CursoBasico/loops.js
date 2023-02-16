var alumnos = ["Guillermo", "Juan", "Alma", "Ricarda"];
function saludarAlumno(alumno){
    console.log("Hola, " + alumno);
}
// For
for(var i = 0; i < alumnos.length; i++){
    saludarAlumno(alumnos[i])
}
// For.rar
for(var estudiante of alumnos){
    saludarAlumno(estudiante)
}
// While
while(alumnos.length > 0){
    var estudiante = alumnos.shift();
    saludarAlumno(estudiante);
}