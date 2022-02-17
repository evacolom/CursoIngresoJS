/* Eva Colom
Ejercicio 5 WHILE
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
		
	while(sexoIngresado != "f" && "m"){
		sexoIngresado = prompt("Ingrese nuevamente");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}