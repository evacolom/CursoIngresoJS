/*
Eva Colom 
Ejercicio 5 bis.
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
bis: Se debe mostrar el mensaje: "Perez, usted se llama José y tiene 66 años" se debe obtener el apellido, de la manera que puedan 	*/


function mostrar() {
let nombre;

     nombre = document.getElementById("txtIdNombre").value;
 
let edad;
	 edad = document.getElementById("txtIdEdad").value;


let apellido;
     apellido = prompt("Ingrese su apellido");



nombreyedad= apellido + (", usted se llama ") + nombre + (" y tiene " ) + edad + (" años");
alert(nombreyedad);
}
