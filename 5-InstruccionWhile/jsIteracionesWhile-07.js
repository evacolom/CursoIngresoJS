/*
Eva Colom
Ejercicio 7 WHILE
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador=0;
	let acum=0;
	let respuesta="s";
	let promedio;
	let numeroIngresado;

	while(respuesta == "s"){
		numero = parseFloat(prompt("Ingrese un número"));
		acum = acum + numeroIngresado;
		contador  = contador + 1;
		respuesta = "¿Continuar? s/n";
	}

	promedio = acum  / contador;
	
	documet.getElementById("txtIdSuma").value = acum ;
	document.getElementById("txtIdPromedio").value= promedio;

}