/* Eva Colom
Ejercicio 2 Switch */


function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;

	 switch(mes){
	   case "Julio":
	   case "Agosto":
	   alert("Abrigate que hace frío");
	   break;
	   case "Septiembre":
	   case  "Octubre":
	   case "Noviembre": 
	   case "Diciembre":
	   alert("Falta para el invierno");
	   break;
	   default : alert("Ya pasamos el frio, ahora calor!!!");

	}

}


