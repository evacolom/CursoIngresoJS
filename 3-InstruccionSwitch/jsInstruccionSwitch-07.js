

/* Ejercicio 7 Switch
Eva Colom */

function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
		case "Bariloche":
		    alert("Es al oeste");
		break;
		case "Cataratas":	 
			alert("Es al norte");
		break;
		case "Mar del plata":
			alert("Es al sudeste");
		break;
		case "Ushuaia":
			alert("Es al sur");
			
			
		}

}