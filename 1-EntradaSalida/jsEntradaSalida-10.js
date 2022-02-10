/*
Eva Colom
Ejercicio 10 bis1*/
function mostrarAumento()
{
	 let importe;
	 let porcentaje;
	 let resultado;

 importe = parseInt(document.getElementById("txtIdImporte").value);

 porcentaje = prompt("Ingrese un porcentaje de descuento");
 resultado = (importe * porcentaje) / 100;

 document.getElementById("txtIdResultado").value = resultado;


}
