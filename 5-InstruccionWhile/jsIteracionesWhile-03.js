/* Eva Colom
Ejercicio 3 while
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(! (claveIngresada == "utn750")){
		claveIngresada = prompt("Ingrese su clave nuevamente");
	}
	if(claveIngresada == "utn750"){
		alert("Sesión iniciada");

	}
	
}
