/* Eva Colom
TP 2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
     let largo;
     let ancho;
     let mensaje;
     let perímetro;
     let alambre;
    

         largo = parseFloat(document.getElementById("txtIdLargo").value);
         ancho = parseFloat(document.getElementById("txtIdAncho").value);

              perímetro = (largo + ancho) * 2;
             alambre = perímetro * 3;

         mensaje = "Se necesita comprar " + alambre + " metros de alambre";

         alert(mensaje);


}
function Circulo () 
{
     let radio;
     let perímetro;
     let mensaje;
     let alambre;
    

 radio = parseFloat(document.getElementById("txtIdRadio").value);

 perímetro = 2 * 3.14 * radio;
 alambre = perímetro * 3;
 mensaje = "Se necesita comprar " + alambre + " metros de alambre";
 alert(mensaje);
	
}
function Materiales () 
{
    let largo;
    let ancho;
    let cemento;
    let area;
    let cal;
   

        largo = parseFloat(document.getElementById("txtIdLargo").value);
        ancho = parseFloat(document.getElementById("txtIdAncho").value);

        area = largo * ancho;
        cemento = area * 2;
        cal = area * 2;

    alert("Un contrapiso de " + area + " m2 debo comprar " + cemento + " bolsas de cemento y " + cal + " de cal");
}