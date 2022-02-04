/*
Eva Colom
Ejercicio 9*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;

 sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

 aumento= sueldo * 0.10;
 
 resultado = sueldo + aumento;

 document.getElementById("txtIdResultado").value = resultado;

}
