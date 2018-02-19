function Mostrar()
{    
    var numero;
    var parar;
    var contador=0; 
    var max=0, min=0;           
        
        while(parar!="parar"){
            numero=prompt("ingrese numero "+ (contador+1));
            contador++;
            parar=prompt("si desea parar de ingresar numeros escriba parar");
            parar=parar.toUpperCase();
            parar=parar.toLowerCase();
            if(numero>max){
                max=numero;
            }
            if(min==0){
                min=numero;
            }
            if(numero<min){
                min=numero;
            }

        }
                
        document.getElementById('maximo').value=max;
        document.getElementById('minimo').value=min;
        
}//FIN DE LA FUNCIÓN