/*
Eva Colom
Ejercicio 10 bis2*/
function mostrarAumento()
{
	let importe;
	let porcentaje;
    let resultado;
	let nombreProducto;
	let mensajeAMostrar;
	let precioFinal;

        importe = parseInt(document.getElementById("txtIdImporte").value);
	    porcentaje = prompt("Ingrese un porcentaje de descuento");
	    nombreProducto = prompt("Ingrese el nombre del producto");

        resultado = importe * porcentaje / 100;
        precioFinal = importe - resultado;

        document.getElementById("txtIdResultado").value = resultado;

        mensajeAMostrar = "Usted compró un " + nombreProducto + " con " + porcentaje + "% de descuento, el precio final es " + precioFinal;
 
	alert(mensajeAMostrar);


}
