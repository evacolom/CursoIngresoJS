function mostrar()
{
	let edad;
	let estadoCivil;

 edad = parseInt(document.getElementById("txtIdEdad").value);
 estadoCivil = document.getElementById("estadoCivil").value;

    if( ! (edad > 18 && estadoCivil == "Soltero")) {
	
	alert("Es soltero y no es menor");
	}
	

	}

/* prueba 

function mostrar()
{

	let numeroA;
	let numeroB;
	let numeroC;
	
 if(numeroA < numeroB && numeroC) {

 alert("Número A es el menor");

 }

 else if(numeroB < numeroA && numeroC) { 
         alert("Número B es el menor");
 }
 
 else {
	 alert("Número C es el menor");
    }
	*/
