/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var n1, n2;
	var resultado;
		n1=document.getElementById('numeroUno').value;
		n2=document.getElementById('numeroDos').value;

		n1=parseInt(n1);
		n2=parseInt(n2);
		resultado=parseInt(resultado);

		resultado=n1+n2;

		alert("el resultado es "+ resultado);

}

function restar()
{
	/* solo en la suma se escribe parseInt dado que el simbolo + es el unico que tiene dos funciones tanto
	para concatenar como para sumar*/
	var n1, n2;
	var resultado;
		n1=document.getElementById('numeroUno').value;
		n2=document.getElementById('numeroDos').value;	

		resultado=n1-n2;

		alert("el resultado es "+ resultado);
}

function multiplicar()
{ 	
	/* no se debe poner parseInt en la multiplicacion ni en la division dado que esto convierte el valor a numero entero
	y si se usan numeros decimales puede que no sirva el programa.*/
	var n1, n2;
	var resultado;
		n1=document.getElementById('numeroUno').value;
		n2=document.getElementById('numeroDos').value;

		resultado=n1*n2;

		alert("el resultado es "+ resultado);
}

function dividir()
{
	var n1, n2;
	var resultado;
		n1=document.getElementById('numeroUno').value;
		n2=document.getElementById('numeroDos').value;

		resultado=n1/n2;

		alert("el resultado es "+ resultado);
}

