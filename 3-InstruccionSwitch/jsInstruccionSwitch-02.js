/* Eva Colom
Ejercicio 2 Switch */


/* Eva Colom
 Ejercicio 2 Switch*/

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
		   alert("Ya pasó el frío, ahora calor!!");
	       break;
	   default : 
	       alert("Falta para el invierno");
	       break;

	    }

}


