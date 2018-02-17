function Mostrar()
{
var  numero=[5]; 
// por que al crear el array desde el inicio queda con el mismo valor en todos los espacios, esto depende del numero 
// del array por ejemplo este array es de tamaño 5 y al inicio cada espacio del array queda marcado con 5.    
    var contador=0;    
    
    while(contador<5){
        numero[contador]=prompt("ingrese el numero "+(contador+1)); 
        numero[contador]=parseInt(numero[contador]);
        contador++;        
    }
    
    var resultadoSuma=0;
    for(var i=0; i<5; i++){                
        resultadoSuma=parseInt(resultadoSuma);
        resultadoSuma=resultadoSuma+numero[i];           
    }      
    
    var elPromedio;
        elPromedio=resultadoSuma/5;        
        
        document.getElementById('suma').value=resultadoSuma;
        document.getElementById('promedio').value=elPromedio;
    
    
}//FIN DE LA FUNCIÃ“N