/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var conversion;
	var gradosRestantes;
	var fahrenheit=32;	

		temperatura=document.getElementById('Temperatura').value;	

		temperatura=parseInt(temperatura);
		conversion=parseInt(conversion);
		gradosRestantes=parseInt(gradosRestantes);
		fahrenheit=parseInt(fahrenheit);
		
		gradosRestantes= temperatura-fahrenheit; 

		conversion= gradosRestantes * 5/9;

		alert(temperatura+" grados fahrenheit son "+conversion+" grados centigrados");

}

function CentigradosFahrenheit () 
{
	var temperatura;
	var conversion;
	var fahrenheit=32;	

		temperatura=document.getElementById('Temperatura').value;	

		temperatura=parseInt(temperatura);
		conversion=parseInt(conversion);
		fahrenheit=parseInt(fahrenheit);
		
		conversion=(temperatura*9/5)+fahrenheit;

		alert(temperatura+" grados centigrados son "+conversion+" grados fahrenheit");

}
