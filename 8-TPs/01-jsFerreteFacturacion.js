/*
EvaColom
TP 1
*/
function Sumar () 
{
     let numeroparciado1;
	 let numeroparciado2;
     let numeroparciado3;
     let suma;
     let mensajeAMostrar;

numeroparciado1 = parseInt(document.getElementById("txtIdPrecioUno").value);
numeroparciado2 = parseInt(document.getElementById("txtIdPrecioDos").value);
numeroparciado3 = parseInt(document.getElementById("txtIdPrecioTres").value);

suma = (numeroparciado1 + numeroparciado2 + numeroparciado3);

mensajeAMostrar= "La suma es " + (suma);
alert(mensajeAMostrar);
 
}
function Promedio () 
{
     let numeroparciado1;
	 let numeroparciado2;
     let numeroparciado3;
     let promedio;
     let promedioFinal;
     let mensajeAMostrar;

numeroparciado1 = parseInt(document.getElementById("txtIdPrecioUno").value);
numeroparciado2 = parseInt(document.getElementById("txtIdPrecioDos").value);
numeroparciado3 = parseInt(document.getElementById("txtIdPrecioTres").value);

promedio = numeroparciado1 + numeroparciado2 + numeroparciado3;
promedioFinal = promedio / 3;

mensajeAMostrar= "El promedio es " + promedioFinal;
alert(mensajeAMostrar);

}
function PrecioFinal () 
{
    let numeroparciado1;
	let numeroparciado2;
    let numeroparciado3;
    let iva;
    let suma;
    let precioFinal;

     numeroparciado1 = parseInt(document.getElementById("txtIdPrecioUno").value);
     numeroparciado2 = parseInt(document.getElementById("txtIdPrecioDos").value);
     numeroparciado3 = parseInt(document.getElementById("txtIdPrecioTres").value);

         suma = numeroparciado1 + numeroparciado2 + numeroparciado3;
         iva = suma * 0.21;
         precioFinal = suma + iva;
         mensajeAMostrar = "El precio final más IVA es " + precioFinal;
    
     alert(mensajeAMostrar);
	
}