
/* Eva Colom
   Ejercicio 4 Switch */

function mostrar()
{

	let mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
		  break;
		case "Febrero":
			alert("Este mes tiene 28 días");
		  break;
		default:
			alert("Este mes tiene 31 días");
		  break;
		  

		
	}


}