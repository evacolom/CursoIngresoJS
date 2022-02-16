/* Eva Colom
Ejercicio 9 */

function mostrar()
{
	let estacion;
	let destino;
	let porcentaje;
	let precioFinal;
	let mensajeAMostrar;
	let valor;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	valor = 15000;

	// Invierno 
	switch(estacion){
		 case "Invierno":
	      if(destino == "Bariloche"){
			porcentaje = valor * 20 / 100;
			precioFinal = valor + porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar);
		}
		else if(destino == "Cordoba"){
		   porcentaje = valor * 10 / 100;
		   precioFinal = valor - porcentaje;
		   mensajeAMostrar = "El valor del viaje es " + precioFinal;
		   alert(mensajeAMostrar);
		}
		else if(destino == "Cataratas"){
			porcentaje = valor * 10 / 100;
			precioFinal = valor - porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar);
	    }
	    else if(destino == "Mar del plata"){
		   porcentaje = valor * 20 / 100;
		   precioFinal = valor - porcentaje;
		   mensajeAMostrar = "El valor del viaje es " + precioFinal;
		   alert(mensajeAMostrar);
	    }    

	// Verano

    case "Verano":
		if(destino == "Bariloche"){
			porcentaje = valor * 20 / 100;
			precioFinal = valor - porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar);
		}
		else if(destino == "Cordoba"){
			porcentaje = valor * 10 / 100;
			precioFinal = valor + porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar)
		}
		else if(destino == "Cataratas"){
				porcentaje = valor * 10 / 100;
				precioFinal = valor + porcentaje;
				mensajeAMostrar = "El valor del viaje es " + precioFinal;
				alert(mensajeAMostrar);
		}
		else if(destino == "Mar del plata"){
			porcentaje = valor * 20 / 100;
			precioFinal = valor + porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar);
		}

	// Otoño y Primavera

	case "Otoño":
	case "Primavera":
		if(destino == "Bariloche"){
			porcentaje = valor * 10 / 100;
			precioFinal = valor + porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar);
		}
		else if(destino == "Cataratas"){
			porcentaje = valor * 10 / 100;
			precioFinal = valor + porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar);
		}
		else if(destino == "Mar del plata"){
			porcentaje = valor * 10 / 100;
			precioFinal = valor + porcentaje;
			mensajeAMostrar = "El valor del viaje es " + precioFinal;
			alert(mensajeAMostrar);
		}
		else if(destino == "Cordoba"){
			mensajeAMostrar = "El valor del viaje es " + valor;
			alert(mensajeAMostrar);
		}

	}
		
}