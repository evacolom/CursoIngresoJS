/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 

 function CalcularPrecio () 
{
    let cantidad = parseFloat(document.getElementById("txtIdCantidad").value);
    let precioDescuento;
    let descuento;
    let marca;
    const PRECIO = 35;
    
    
    if(cantidad <= 6){
        descuento =  PRECIO * 50 / 100;
        precioDescuento = PRECIO - descuento;
    }
    
    else if(cantidad == 5 && marca == "ArgentinaLuz" ){
        descuento = PRECIO * 40 / 100;
        precioDescuento = PRECIO - descuento;
    }

    else if (  ! (marca == "ArgentinaLuz")) {
        descuento = PRECIO * 30 / 100;
        precioDescuento = PRECIO - descuento;
    }

    document.getElementById("txtIdprecioDescuento").value = precioDescuento;


 	
} */

function CalcularPrecio () 
{
    const PRECIO = 35;
   let cantidadLampara;
   let marcaLampara;
   let precioPorUnidad;
   let porcentaje;
   let precioConDescuento;

   cantidadLampara = parseInt(document.getElementById("txtIdCantidad").value);
   marcaLampara = document.getElementById("Marca").value;
   
   precioPorUnidad = PRECIO;

   if  (cantidadLampara >= 6) {

      porcentaje = precioPorUnidad * 50 / 100;
      precioConDescuento = precioPorUnidad - porcentaje;
      
   }
   else if (cantidadLampara == 5) {
      
      if (marcaLampara == "ArgentinaLuz") {

         porcentaje = precioPorUnidad * 40 / 100;
         precioConDescuento = precioPorUnidad - porcentaje;


      }else{
         porcentaje = precioPorUnidad * 30 / 100;
         precioConDescuento = precioPorUnidad - porcentaje;

   
      }     
      
   }else if (cantidadLampara == 4) {

      if (marcaLampara == "ArgentinaLuz" || marcaLampara =="FelipeLamparas") {

         precioConDescuento = (precioPorUnidad * 0.75).toFixed(2);

      }else{

         precioConDescuento = (precioXcantidad * 0.8).toFixed(2);
      }
      
   }else if (cantidadLampara == 3) {

      if (marcaLampara == "ArgentinaLuz") {

         precioConDescuento = (precioXcantidad * 0.85).toFixed(2);
         
      }else if(marcaLampara == "FelipeLamparas" < marcaLampara == "FelipeLamparas"){

         precioConDescuento = (precioXcantidad * 0.9).toFixed(2);        
         
      }
      else{

         precioConDescuento = (precioXcantidad * 0.95).toFixed(2);
      }
    }

   document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

   if (precioConDescuento > 120) {
       
      precioConDescuento = precioConDescuento * 0.1;

      alert("Usted pago " + precioConDescuento);
      
   }
}
