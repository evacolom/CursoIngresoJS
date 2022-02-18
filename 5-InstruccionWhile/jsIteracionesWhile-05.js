/* Eva Colom
Ejercicio 5 WHILE
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado = prompt("Ingrese f ó m");

		
	while(sexoIngresado != "f" && sexoIngresado != "m"){
		
		sexoIngresado = prompt("Ingrese nuevamente");

	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}