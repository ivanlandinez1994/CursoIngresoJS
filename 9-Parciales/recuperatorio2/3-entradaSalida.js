//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var anchoTerreno;
	var largoTerreno;
	var perimetro;
	var cantidadAlambre;

		anchoTerreno=document.getElementById('ancho').value;
		anchoTerreno=parseInt(anchoTerreno);
		largoTerreno=document.getElementById('largo').value;
		largoTerreno=parseInt(largoTerreno);

		perimetro=(anchoTerreno+largoTerreno)*2;
		cantidadAlambre=perimetro*6;

		alert("se necesitan " +cantidadAlambre+" metros de alambre");

	
}

