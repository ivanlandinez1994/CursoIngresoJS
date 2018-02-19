//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numeros;
    var pares=0;
    var promedio;
    var sumaNumeros=0;
    var max=0, min=0;
    var parar;
    var contadorIngresoNumeros=0;
    
        while(parar!="parar"){
            numeros=prompt("ingrese un numero mayor o igual a 0");
            if(numeros>0){
                sumaNumeros=parseInt(sumaNumeros);
                numeros=parseInt(numeros);
                sumaNumeros=sumaNumeros+numeros;
                if(numeros>min){
                    min=numeros;
                }
                if(numeros>max){
                    max=numeros;
                }             
                else if(numeros<min){
                    min=numeros;
                }
                if(numeros%2==0){
                    pares++;
                }
                contadorIngresoNumeros++;
                parar=prompt("si desea parar de ingresar numeros escriba parar");
            }
            else{
                alert("ingrese un numero mayor o igual a 0");
            }                       
        }
        promedio=sumaNumeros/contadorIngresoNumeros; 
        document.write("a) La cantidad de numeros pares ingresados es "+pares+
                           "</br>b) El promedio de todos los numeros ingresados es "+promedio+
                           "</br>c) La suma de todos los numeros ingresados es "+sumaNumeros+
                           "</br>d) El numero maximo ingresado fue "+max+" y el minimo fue "+min);
	
}

