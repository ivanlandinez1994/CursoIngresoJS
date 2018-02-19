//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1, numero2;
    var resultadoNumeros;
    
        numero1=prompt("Ingrese el primer numero");
        numero2=prompt("Ingrese el segundo numero");
        
        if(numero1==numero2){
            resultadoNumeros=numero1*numero2;
            document.write("Dado que los dos numeros son iguales se procede a multiplicar los numeros y el resultado es "+resultadoNumeros);
        }
        else if(numero1>numero2){
            resultadoNumeros=numero1-numero2;
            document.write("Dado que el primer numero es mayor que el segundo los numeros se restan y el resultado es "+resultadoNumeros);
        }
        else{
            numero1=parseInt(numero1);
            numero2=parseInt(numero2);
            resultadoNumeros=numero1+numero2;
            document.write("Dado que el segundo numero es mayor que el primero los numeros se suman y el resultado es "+resultadoNumeros);
        }        
        
	
}

