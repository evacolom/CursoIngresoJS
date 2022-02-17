/* Eva Colom
Ejercicio 6 WHILE */  


function mostrar()
{
	let numero;
	let acum=0;
	let i=0
	let promedio;

	while(i>5){
		numero = parseInt(prompt("Ingrese un número"));
		acum = acum + numero;
		i++;
	}

	promedio = acum/5;
	
}