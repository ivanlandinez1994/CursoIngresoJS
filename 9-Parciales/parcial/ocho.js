function Mostrar()
{
    var numeros;
    var promedio;
    var parar;
    var pares=0;
    var totalNumerosIngresados=0;
    var max=0, min=10000000000;
    var contador=0;
    
    
    
        while(parar!="parar"){
            numeros=prompt("ingrese un numero positivo."+" Valor "+(contador+1));
            if(numeros>=0){
                
                if(numeros%2==0){
                    pares++;
                }            
                totalNumerosIngresados=parseInt(totalNumerosIngresados);
                numeros=parseInt(numeros);
                totalNumerosIngresados=totalNumerosIngresados+numeros;
                
                if(numeros>max){
                    max=numeros;//8
                }
                else if(min>numeros){
                    min=numeros;
                }
                
                contador++;
                parar=prompt("si desea parar escriba parar");
            }
            else{
                alert("debe ingresar un numero mayor o igual a 0");
            }
        }
    
    promedio=totalNumerosIngresados/contador;
    
    alert("La cantidad de numeros pares fue de "+pares+"\nEl promedio de los numeros ingresados fue de "+promedio+
          "\nLa suma total de todos los numeros fue de "+totalNumerosIngresados+"\nEl numero maximo fue "+max+
          "\nEl numero minimo fue "+min);
}
