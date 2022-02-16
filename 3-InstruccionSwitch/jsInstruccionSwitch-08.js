/* Eva Colom
Ejercicio 8 Switch */

function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
		   alert("Hace frío");
		break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
	}
	
}