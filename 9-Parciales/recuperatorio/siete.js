function Mostrar()
{
    var masculino=new Array();
    var femenino=new Array();
    var promedioEdad;    
    var sumatoriaEdadesMujeres=0;
    var sumatoriaEdadesHombres=0;
    var hombresMayor20=0;    
    var genero;  
    var contadorFemenino=0;
    var contadorMasculino=0;
    var contadorCantidadPersonas=0;
    
        while(contadorCantidadPersonas<4){                    
            genero=prompt("ingrese el genero de la persona numero "+(contadorCantidadPersonas+1));
            genero=genero.toUpperCase();
            genero=genero.toLowerCase();
            
            if(genero=="masculino"){
                masculino[contadorMasculino]=prompt("ingrese la edad de la persona numero "+(contadorCantidadPersonas+1)+" de genero "+genero);                 
                    if(masculino[contadorMasculino]>=20){
                        hombresMayor20++;                                             
                    }
                contadorMasculino++; 
                contadorCantidadPersonas++;
            }
            else if(genero=="femenino"){
                femenino[contadorFemenino]=prompt("ingrese la edad de la persona numero "+(contadorCantidadPersonas+1)+" de genero "+genero);                 
                contadorFemenino++; 
                contadorCantidadPersonas++;
            }
            else{
                alert("ingrese un genero correcto, masculino o femenino");
            }            
        }
        
        var minFemenino=Math.min.apply(null, femenino);
        var minMasculino=Math.min.apply(null, masculino);
        
        for(var i=0; i<femenino.length; i++){            
            sumatoriaEdadesMujeres=parseInt(sumatoriaEdadesMujeres);
            femenino[i]=parseInt(femenino[i]);
            sumatoriaEdadesMujeres=sumatoriaEdadesMujeres+femenino[i];
            }
            
        for(var i=0; i<masculino.length; i++){                
            sumatoriaEdadesHombres=parseInt(sumatoriaEdadesHombres);  
            masculino[i]=parseInt(masculino[i]);
            sumatoriaEdadesHombres=sumatoriaEdadesHombres+masculino[i];            
        }
        
        promedioEdad=(sumatoriaEdadesMujeres+sumatoriaEdadesHombres)/4;                               
        
        if(minMasculino>minFemenino){
            document.write("El promedio de edad de las personas es "+promedioEdad+
                        "</br>La edad mas baja fue una persona de sexo femenino su edad es de "+minFemenino+               
                        "</br>La cantidad de varones que su edad sea mayor o igual a 20 es "+hombresMayor20);
        }
        else if(minMasculino<minFemenino){
            document.write("El promedio de edad de las personas es "+promedioEdad+
                        "</br>La edad mas baja fue una persona de sexo masculino su edad es de "+minMasculino+               
                        "</br>La cantidad de varones que su edad sea mayor o igual a 20 es "+hombresMayor20);
        }
        
        
        
        
}
