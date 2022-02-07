/*
Eva Colom
Ejercicio 10*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

 importe = parseInt(document.getElementById("txtIdImporte").value);

 descuento = importe * 25 / 100;
 
 resultado = importe - descuento;

 document.getElementById("txtIdResultado").value = resultado;

}
