/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadDeLamparas;
	var precioLamparas=35;
	var marca;
	var precioFinal;
	var precioMasIngresosBrutos;

		cantidadDeLamparas=document.getElementById('Cantidad').value;
		marca=document.getElementById('Marca').value;
		
/*a*/	if(cantidadDeLamparas>=6){
			precioFinal=(cantidadDeLamparas*precioLamparas)*0.50;
			document.getElementById('precioDescuento').value=precioFinal;
		}
/*b*/	else if(cantidadDeLamparas==5){
			
			if(marca=="ArgentinaLuz"){
				precioFinal=(cantidadDeLamparas*precioLamparas)*0.60;
				document.getElementById('precioDescuento').value=precioFinal;
			}
			else{
				precioFinal=(cantidadDeLamparas*precioLamparas)*0.70;
				document.getElementById('precioDescuento').value=precioFinal;
			}
		}
/*c*/	else if(cantidadDeLamparas==4){
			
			if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas"){
				precioFinal=(cantidadDeLamparas*precioLamparas)*0.75;
				document.getElementById('precioDescuento').value=precioFinal;
			}
			else{
				precioFinal=(cantidadDeLamparas*precioLamparas)*0.80;
				document.getElementById('precioDescuento').value=precioFinal;
			}
		}
/*d*/	else if(cantidadDeLamparas==3){
			
			if(marca=="ArgentinaLuz"){
				precioFinal=(cantidadDeLamparas*precioLamparas)*0.85;
				document.getElementById('precioDescuento').value=precioFinal;
			}
			else if(marca=="FelipeLamparas"){
				precioFinal=(cantidadDeLamparas*precioLamparas)*0.90;
				document.getElementById('precioDescuento').value=precioFinal;
			}
			else{
				precioFinal=(cantidadDeLamparas*precioLamparas)*0.95;
				document.getElementById('precioDescuento').value=precioFinal;
			}
		}
		if(precioFinal>120){
			var valorIngresosBrutos;
				precioMasIngresosBrutos=precioFinal*1.10;
				valorIngresosBrutos=precioFinal*0.1;
				document.getElementById('precioDescuento').value=precioMasIngresosBrutos;			
				alert("El precio de las con descuento es "+precioFinal+ 
					" y dado que el importe es mayor a 120 se suma un impuesto del 10%"+ 
					"\nIIBB Usted pago "+precioMasIngresosBrutos+ " siendo "+valorIngresosBrutos+ " el impuesto que pago");
		}
}
