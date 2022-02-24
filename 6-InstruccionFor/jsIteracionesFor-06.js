/* Eva Colom
Ejercicio 6 FOR */

function mostrar()
{
	let i;
	let numeros;
	let pares=0;

	numeros = parseInt(prompt("Ingrese números"));

	for(i=1; i <= numeros; i++){


		if(i % 2 == 0){

			alert(i);
			pares++;

		}

	}

	alert("Se encontraron " + pares + " pares");

}