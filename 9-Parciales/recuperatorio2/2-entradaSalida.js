//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var precioMasIva;
		importe=prompt("Ingrese el importe del producto");

		precioMasIva=importe*1.21;

		document.getElementById('importe').value=precioMasIva;
	
}

