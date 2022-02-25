
/* Eva Colom
Mod Examen 2020 */

function mostrar()
{
	let i;
	// productos //

	let jabon;
	let alcohol;
	let barbijo;

	// info que tenemos que sacar //
	let fabricante;
	let producto;
	let marca;

    // valores // 
	
	let precio;
	let minPrecio = 301;
	let maxPrecio;
	let unidadesBarbijo;
	let unidadesJabon;
	let unidadesAlcohol;
	let fabricanteBaratoAlcohol;
	let marcaA;
	let acumJabon;

	// mensajes //

	let mensaje1;
	let mensaje2;
	let mensaje3;
	
	for(let i = 0; i <5; i++){
		
		do{
		producto = prompt("Ingrese el producto que desea comprar: alcohol, jabon o barbijo");
		} 
		while(producto != "alcohol" && producto != "jabon" && producto != "barbijo")

		do{
			precio = parseFloat(prompt("Ingrese el precio que pagaría por el producto, entre $100 y $300."));
		}while(precio > 100 || precio > 300 || Number.isNaN(precio)== true){
			precio = parseInt(prompt("Ingrese un número válido"));
		}
		
		do{
			unidades = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar. No puede ser mayor a 1000."));
		}while(isNaN(unidades)== true || unidades < 0 || unidades > 1000){
			marca = prompt("Ingrese marca del producto");
			fabricante = prompt("Ingrese un fabricante");
		}
		// punto a //
		if(producto == "alcohol" && precio < minPrecio){
			precio = minPrecio;
			fabricante = fabricanteBaratoAlcohol;
			unidades = unidadesAlcohol;
		}
		// punto b y c //
		else if(producto == "jabon"){
			unidadesJabon = acumJabon + unidades;
			precio = minPrecio;
		}

	mensaje1 = "Contamos con " + minUnidadesA + " unidades y el fabricante es " + fabricanteA;
	mensaje2 = "El precio unitario es " + minPrecio;
	mensaje3 = "Contamos con " + unidadesJabon + " unidades de jabón";
	alert(mensaje1);
	alert(mensaje2);
	alert(mensaje3);
}

}
