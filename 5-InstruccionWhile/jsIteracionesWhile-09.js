/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	
	let numeroIngresado;
	let maximo;
	let minimo;
	let resp;
	resp = "s";


	numeroIngresado = prompt("Ingrese un número");

	while(isNaN(numeroIngresado)==true){
		
		numeroIngresado = prompt("Ingrese un número válido");

	}
	
	maximo = numeroIngresado;
	minimo = numeroIngresado;
	resp = prompt("¿Ingresa otro? s/n");

	while(resp == "s"){

		numeroIngresado = parseInt(prompt("Ingrese otro"));
		
		while(isNaN(numeroIngresado)==true){
		
		numeroIngresado = prompt("Ingrese un número válido");

	    }

		if(numeroIngresado > maximo){
			maximo = numeroIngresado;
		}
		else if(numeroIngresado < minimo){
			minimo = numeroIngresado;
		} 
		resp = prompt("¿Desea continuar? s/n");
	}

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}