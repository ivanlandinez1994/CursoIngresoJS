function Mostrar()
{
    var positivos;
    var parar;        
    var promedio;
    var pares=0;
    var totalNumeros=0;
    var max=0, min=0;
    var contadorIngresos=0;
        
    while(parar!="parar"){
        positivos=prompt("Ingrese el numero "+(contadorIngresos+1));
        if(positivos>0){
            if(min==0){
                min=positivos;
            }            
            if(positivos%2==0){
                pares++;
            }            
            totalNumeros=parseInt(totalNumeros);
            positivos=parseInt(positivos);
            totalNumeros=totalNumeros+positivos;
            if(max<positivos){
                max=positivos;
            }
            else if(min>positivos){
                min=positivos;
            }
            contadorIngresos++;
        }
        parar=prompt("si desea parar escribar parar");
        parar=parar.toUpperCase();
        parar=parar.toLowerCase();
    }
    promedio=totalNumeros/contadorIngresos;
    document.write("a) La cantidad de numeros pares es "+pares+
                   "</br>b) El promedio de los numeros ingresados es "+promedio+
                   "</br>c) La sumatoria de todos los numeros ingresados es "+totalNumeros+
                   "</br>d) El numero maximo es "+max+"</br>e) El numero minimo es "+min);
}
