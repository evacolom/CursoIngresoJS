/*
Eva Colom
Trabajo Práctico 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    let fahrenheit;
    let centigrados;
    let mensajeAMostrar;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    centigrados = (fahrenheit - 32)  * 5 / 9;

    mensajeAMostrar = fahrenheit + " grados fahrenheit " + " equivalen a " + centigrados + " grados centigrados";
	
    alert(mensajeAMostrar);
}

function CentigradosFahrenheit () 
{
	let centigrados;
    let fahrenheit;
    let mensajeAMostrar;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = 9 * centigrados / 5 + 32;

    mensajeAMostrar = centigrados + " grados centigrados " + " equivalen a " + fahrenheit +  " grados fahrenheit ";
    
    alert(mensajeAMostrar);
    
}
