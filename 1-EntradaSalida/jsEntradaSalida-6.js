/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
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

		alert("el resultado es "+resultado);


}

