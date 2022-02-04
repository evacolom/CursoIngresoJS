/*
Eva Colom
Ejercicio 8 */
function SacarResto()
{
	let dividendo;
	let divisor;
	let mensajeAMostrar;

dividendo = document.getElementById("txtIdNumeroDividendo").value;
divisor = document.getElementById("txtIdNumeroDivisor").value;

numeroparciado1 = parseInt(dividendo);
numeroparciado2 = parseInt(divisor);


 mensajeAMostrar = "El resto es " + (numeroparciado1 % numeroparciado2);

}
