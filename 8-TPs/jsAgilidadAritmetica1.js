/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
	var intentoUsuario;
	var numeroRandom1;
	var numeroRandom2;
	var operacionAleatoria;
	var resultadoCorrecto;	
function comenzar()
{
	
		numeroRandom1=Math.floor((Math.random()*10)+1);
		numeroRandom2=Math.floor((Math.random()*10)+1);
		document.getElementById('PrimerNumero').value=numeroRandom1;
		document.getElementById('SegundoNumero').value=numeroRandom2;
		operacionAleatoria=Math.floor((Math.random()*4)+1);

	
		switch(operacionAleatoria){
			case 1:
				document.getElementById('Operador').value="+";
				numeroRandom1=parseInt(numeroRandom1);
				numeroRandom2=parseInt(numeroRandom2);
				resultadoCorrecto=numeroRandom1+numeroRandom2;
			break;
			case 2:
				document.getElementById('Operador').value="-";
				resultadoCorrecto=numeroRandom1-numeroRandom2;
			break;
			case 3:
				document.getElementById('Operador').value="*";
				resultadoCorrecto=numeroRandom1*numeroRandom2;
			break;
			case 4:
				document.getElementById('Operador').value="/";
				resultadoCorrecto=numeroRandom1/numeroRandom2;
			break;
		}	
		
}//FIN DE LA FUNCIÓN
function Responder()
{
	intentoUsuario=document.getElementById('Respuesta').value;
			if(intentoUsuario==resultadoCorrecto){
				alert("Respuesta correcta");
			}
			else{
				alert("Respuesta incorrecta");		
			}	

}//FIN DE LA FUNCIÓN
