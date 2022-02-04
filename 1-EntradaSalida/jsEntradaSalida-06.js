/*
Eva Colom
Ejercicio 6*/
 function sumar()
{
     let numero1;
     let numero2;
     let mensajeAMostrar;
 
numero1 = document.getElementById("txtIdNumeroUno").value;
numero2 = document.getElementById("txtIdNumeroDos").value;

 numeroparciado1 = parseInt(numero1);
 numeroparciado2 = parseInt(numero2);

  mensajeAMostrar = "La suma es " + (numeroparciado1 + numeroparciado2);
  alert(mensajeAMostrar);
}
