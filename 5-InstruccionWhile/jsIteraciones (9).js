function Mostrar()
{    
    var numero=[];
    var parar;
    var contador=0;            
        
        while(parar!="parar"){
            numero[contador]=prompt("ingrese numero "+ (contador+1));
            contador++;
            parar=prompt("si desea parar de ingresar numeros escriba parar");
            
            
        }
        var max=Math.max.apply(null, numero);
        var min=Math.min.apply(null, numero);
        
        document.getElementById('maximo').value=max;
        document.getElementById('minimo').value=min;
        
}//FIN DE LA FUNCIÓN