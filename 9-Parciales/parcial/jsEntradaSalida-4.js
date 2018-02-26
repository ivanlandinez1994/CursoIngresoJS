/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
		nombre = prompt("cual es su nombre");
		//se toma el nombre por prompt y se guarda en la variable nombre.
		document.getElementById('elNombre').value=nombre;
		/*el value toma el valor del cuadro de texto, en este caso dado que se debe mostrar
		es el que se toma por prompt entonces se escribe el value=nombre para que en el cuadro
		de texto aparezca lo que se ingreso.*/
		


	
}

