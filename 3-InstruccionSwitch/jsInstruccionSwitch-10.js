function mostrar()
{
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	// Invierno 
	switch(estacion){
		 case "Invierno":
	      if(destino == "Bariloche"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}
		else if(destino == "Cordoba"){
		   mensajeAMostrar = "No se viaja";
		   alert(mensajeAMostrar);
		}
		else if(destino == "Cataratas"){
			mensajeAMostrar = "No se viaja";
			alert(mensajeAMostrar);
	    }
	    else if(destino == "Mar del plata"){
		   mensajeAMostrar = "No se viaja";
		   alert(mensajeAMostrar);
	    }    

	// Verano

    case "Verano":
		if(destino == "Bariloche"){
			mensajeAMostrar = "No se viaja";
			alert(mensajeAMostrar);
			
		}
		else if(destino == "Cordoba"){
			mensajeAMostrar = "No se viaja";
			alert(mensajeAMostrar) 
		}
		if(destino == "Cataratas"){
				mensajeAMostrar = "Se viaja";
				alert(mensajeAMostrar);
		}
		else if(destino == "Mar del plata"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}

	// Otoño

	case "Otoño":
		if(destino == "Bariloche"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}
		else if(destino == "Cataratas"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}
		else if(destino == "Mar del plata"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}
		else if(destino == "Cordoba"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}
		// Primavera
		
	case "Primavera":
		if(destino == "Bariloche"){
			mensajeAMostrar = "No se viaja";
			alert(mensajeAMostrar);
		}
		else if(destino == "Cataratas"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}
		else if(destino == "Mar del plata"){
			mensajeAMostrar = "Se viaja";
		}
		else if(destino == "Cordoba"){
			mensajeAMostrar = "Se viaja";
			alert(mensajeAMostrar);
		}

	}
	
		
}