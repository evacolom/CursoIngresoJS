

/* Ejercicio 7 Switch
Eva Colom */

function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch(destinoIngresado){
		case "Bariloche":
		    mensaje = "Es al oeste";
			break;
		case "Cataratas":	 
			mensaje = "Es al norte";
			break;
		case "Mar del plata":
			mensaje = "Es al este";
			break;
		case "Ushuaia":
			mensaje = "Es al sur";
			break;
		}
		alert(mensaje);

}