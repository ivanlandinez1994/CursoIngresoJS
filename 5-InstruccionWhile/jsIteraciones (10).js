function Mostrar()
{
    
    var numero;
    var sumaNegativos=0;
    var sumaPositivos=0;
    var contadorPositivos=0;
    var contadorNegativos=0;
    var cantidadCeros=0;
    var contadorPares=0;
    var promedioPositivos;
    var promedioNegativos;
    var diferenciaPositivoNegativo;
    var contador=0;
    var parar;  
    
        
        while(parar!="parar"){                        
            numero=prompt("ingrese numero "+(contador+1));                                    
            numero=parseInt(numero);
            contador++;                        
            
            if(numero<0){                               
                sumaNegativos=sumaNegativos+numero;
                contadorNegativos++;
            }
            else if(numero>0){                
                sumaPositivos=sumaPositivos+numero;
                contadorPositivos++;
            }
            else if(numero==0){
                cantidadCeros++;
            }
            if(numero%2==0){
                contadorPares++;               
                
            }
            
            parar=prompt("si desea no ingresar mas numeros escriba parar");
        }
        
        
        promedioPositivos=sumaPositivos/contadorPositivos;
        promedioNegativos=sumaNegativos/contadorNegativos;
        diferenciaPositivoNegativo=sumaPositivos-sumaNegativos;
        
        document.write("1) La suma de los negativos es "+sumaNegativos+ "<br>2) La suma de los positivos es "+sumaPositivos+
                       "<br>3) La cantidad de los positivos es "+contadorPositivos+
                       "<br>4) La cantidad de los negativos es "+contadorNegativos+"<br>5) La cantidad de ceros es "+cantidadCeros+
                       " <br>6) La cantidad de numeros pares es "+contadorPares+"<br>7) El promedio de los positivos es "+promedioPositivos+
                       " <br>8) El promedio de los negativos es "+promedioNegativos+
                       "<br>9) Diferencia entre positivos y negativos, (positvos-negativos) "+diferenciaPositivoNegativo);
               // se utiliza <br/> para el salto de linea dado que es HTML.

}