//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	
    var importeVentas;
    var contador=0;
    var importeMaximo=0, importeMinimo=0;
    
        
        while(contador<7){
            importeVentas=prompt("Ingrese el importe de ventas del dia "+(contador+1));
            if(importeVentas>0){
                if(importeMinimo==0){
                    importeMinimo=importeVentas;
                }
                if(importeMaximo<importeVentas){
                    importeMaximo=importeVentas;
                }
                else if(importeMinimo>importeVentas){
                    importeMinimo=importeVentas;
                }
                contador++;
            }
        }
        alert("El mayor importe fue "+importeMaximo+"\nEl importe menor fue "+importeMinimo);
        
}

