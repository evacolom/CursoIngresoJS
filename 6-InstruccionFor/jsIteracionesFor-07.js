function mostrar()
{

	let i;
	let numeros;
	let divisores=0;

	numeros = parseInt(prompt("Ingrese números"));

	for(i=1; i <numeros; i++){


		if(numeros % i == 0){

			alert(i);
			divisores++;

		}

	}

	alert("Los divisores son " + divisores);

}