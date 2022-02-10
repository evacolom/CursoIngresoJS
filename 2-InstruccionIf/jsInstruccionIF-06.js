function mostrar()
{
    let edad; 

 edad = parseInt(document.getElementById("txtIdEdad").value);

 
 if( edad < 13) {

	alert("Es menor de edad");
 }

 if( edad >= 13 && edad <= 17) {
	alert("Es adolescente");
}

if (edad >= 18) {
	alert("Es mayor de edad");

}
}