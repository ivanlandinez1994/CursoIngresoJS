//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno, numeroDos;
	var resultado;
		numeroUno=prompt("Ingrese el numero uno");
		numeroUno=parseInt(numeroUno);
		numeroDos=prompt("Ingrese el numero dos");
		numeroDos=parseInt(numeroDos);

		if(numeroUno==numeroDos){
			resultado=numeroUno*numeroDos;
			document.write("dado que son iguales se multiplican y el resultado es "+resultado);
		}
		else if(numeroUno>numeroDos){
			resultado=numeroUno-numeroDos;
			document.write("dado que el primero es mayor que el segundo se restan y el resultado es "+resultado);	
		}
		else{
			resultado=numeroUno+numeroDos;		
			document.write("dado que el segundo es mayor que el primero se suman y el resultado es "+resultado)
		}
}

