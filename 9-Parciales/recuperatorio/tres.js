
function Mostrar()
{
	var precio1, precio2, precio3;
	var resultado;
	var promedio;

		precio1=document.getElementById('precioUno').value;
		precio2=document.getElementById('precioDos').value;
		precio3=document.getElementById('precioTres').value;

		precio1=parseInt(precio1);
		precio2=parseInt(precio2);
		precio3=parseInt(precio3);

		resultado=precio1+precio2+precio3;
		promedio=resultado/3;

		alert("La suma de todos los precios es "+ resultado+
			  "\nEl promedio es "+promedio);		

}
