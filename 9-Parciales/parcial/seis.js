function Mostrar()
{
    var importeVentas=[24];  
    var contadorImporte;
    contadorImporte=0;           
        
        while(contadorImporte<24){
                
        importeVentas[contadorImporte]=prompt("ingrese el importe de ventas del dia " + (contadorImporte+1));
        
            if(importeVentas[contadorImporte]>0){                               
                contadorImporte++;                                               
            }
            else {
                alert("ingrese un importe mayor a 0");
            }
        }
        
        var max = Math.max.apply(null,importeVentas);        
        alert("El importe mayor fue el del dia: "+ max);
        
        var min = Math.min.apply(null,importeVentas);        
        alert("El importe menos fue el del dia: "+ min);
        
        
    
    
}
