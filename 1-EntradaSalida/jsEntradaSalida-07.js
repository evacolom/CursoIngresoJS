/*
Eva Colom
Ejercicio 7*/ 

function sumar()
{	
	let numero1;
	let numero2;
	let mensajeAMostrar;

numero1 = document.getElementById("txtIdNumeroUno").value;
numero2 = document.getElementById("txtIdNumeroDos").value;

numeroparciado1 = parseInt(numero1);
numeroparciado2 = parseInt(numero2);

 mensajeAMostrar = "La suma es " + (numeroparciado1 + numeroparciado2);
 alert(mensajeAMostrar);
}

function restar()
{
	let numero1;
	let numero2;
	let mensajeAMostrar;

numero1 = document.getElementById("txtIdNumeroUno").value;
numero2 = document.getElementById("txtIdNumeroDos").value;

numeroparciado1 = parseInt(numero1);
numeroparciado2 = parseInt(numero2);

 mensajeAMostrar = "La resta es " + (numeroparciado1 - numeroparciado2);
 alert(mensajeAMostrar);
	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let mensajeAMostrar;

numero1 = document.getElementById("txtIdNumeroUno").value;
numero2 = document.getElementById("txtIdNumeroDos").value;
 
numeroparciado1 = parseInt(numero1);
numeroparciado2 = parseInt(numero2);

 mensajeAMostrar = "La multiplicación es " + (numeroparciado1 * numeroparciado2);
 alert(mensajeAMostrar);
}

function dividir()
{
	
	let numero1;
	let numero2;
	let mensajeAMostrar;

numero1 = document.getElementById("txtIdNumeroUno").value;
numero2 = document.getElementById("txtIdNumeroDos").value;

numeroparciado1 = parseInt(numero1);
numeroparciado2 = parseInt(numero2);

 mensajeAMostrar = "La división es " + (numeroparciado1 / numeroparciado2);
 alert(mensajeAMostrar);

}

