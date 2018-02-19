function Mostrar()
{
    var numero;        
    var sumatoria=0;        
    var multiplicacion=1;
    var parar;
    var contador=0;
    
    // se agrega el ccontador solo para indicar que numero va a ingresa ej: numero 1 luego numero 2;
    
    while(parar!="parar"){                
        numero=prompt("ingrese numero "+(contador+1));
        
                
        if(numero>=0){ 
            numero=parseInt(numero);
            sumatoria=parseInt(sumatoria);
            sumatoria=sumatoria+numero;            
            contador++;
        }
        else{
            multiplicacion=multiplicacion*numero;
            contador++;
        }
        
        parar=prompt("desea parar de ingresar numeros?, si lo desea escriba parar");
        parar=parar.toUpperCase();
        parar=parar.toLowerCase();
    }
    
    document.getElementById('suma').value=sumatoria;
    document.getElementById('producto').value=multiplicacion;
}