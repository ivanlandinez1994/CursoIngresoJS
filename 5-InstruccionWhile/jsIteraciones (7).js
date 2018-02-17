function Mostrar()
{
    var numero;    
    var acumulado=0;    
    var promedio;        
    var continuarOparar;
    var contador=0;
    
    while (continuarOparar!="parar"){
        numero=prompt("ingrese numero "+(contador+1));
        numero=parseInt(numero);
        acumulado=parseInt(acumulado);
        acumulado=acumulado+numero;        
        continuarOparar=prompt("si no desea continuar escriba parar");   
        contador++;
    }
    
    promedio=acumulado/contador;
    
    document.getElementById('suma').value=acumulado;
    document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN