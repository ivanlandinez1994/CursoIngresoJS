/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//para cerrar toda linea de codigo es necesario ;
	var nombre;
	nombre  = prompt("Escriba su nombre");
	// si se escribe en el prompt ("escriba su nombre", "nombre"); en el cuadro de texto aparecera subrayado para remplazar la palabra nombre
	//Prompt ingreso de datos
	//var person = prompt("Escriba su nombre");
	alert("hola " + nombre+ " como estas hoy?."); //imprime en pantalla del navegador

}

