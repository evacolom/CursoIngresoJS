/*
Eva Colom
Ejercicio 8 */
function SacarResto()
{
	let divisor;
	let dividendo;
	let mensajeAMostrar;

divisor = document.getElementById("txtIdNumeroDividendo").value;
dividendo = document.getElementById("txtIdNumeroDivisor").value;

numeroparciado1 = parseInt(divisor);
numeroparciado2 = parseInt(dividendo);

 mensajeAMostrar = "El resto es " + (numeroparciado1 % numeroparciado2);
 alert(mensajeAMostrar);

}
