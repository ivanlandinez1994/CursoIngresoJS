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
                sumaNegativos=parseInt(sumaNegativos);
                sumaNegativos=sumaNegativos+numero;
                contadorNegativos++;
            }
            else if(numero>0){
                sumaPositivos=parseInt(sumaPositivos);
                sumaPositivos=sumaPositivos+numero;
                contadorPositivos++;
            }
            else if(numero==0){
                cantidadCeros++;
            }
            else if(numero%2==0){
                contadorPares++;               
                
            }
            
            parar=prompt("si desea no ingresar mas numeros escriba parar");
        }
        
        
        promedioPositivos=sumaPositivos/contadorPositivos;
        promedioNegativos=sumaNegativos/contadorNegativos;
        diferenciaPositivoNegativo=sumaPositivos-sumaNegativos;
        
        document.write("La suma de los negativos es "+sumaNegativos+ "<br/> La suma de los positivos es "+sumaPositivos+
                       "<br/> La cantidad de los positivos es "+contadorPositivos+
                       "<br/> La cantidad de los negativos es "+contadorNegativos+"<br/> La cantidad de ceros es "+cantidadCeros+
                       " <br/> La cantidad de numeros pares es "+contadorPares+"<br/> El promedio de los positivos es "+promedioPositivos+
                       " <br/> El promedio de los negativos es "+promedioNegativos);
               // se utiliza <br/> para el salto de linea dado que es HTML.

}