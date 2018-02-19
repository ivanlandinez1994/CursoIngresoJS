//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var masculino=new Array();
    var contadorNotasMasculino=0;
    var femenino=new Array();
    var contadorNotasFemenino=0;
    var notas;
    var genero;
    var contadorNotas=0;
    var varonesMayoroIgualA6=0;
    
        while(contadorNotas<6){
            genero=prompt("Ingrese el genero del alumno "+(contadorNotas+1)+" (f) para femenino, (m)para masculino");  
            genero=genero.toUpperCase();
            genero=genero.toLowerCase();
            if(genero=="m"){           
                notas=prompt("ingrese la nota mayor a 0 y menor a 10 del alumno "+(contadorNotas+1)+" de sexo masculino");
                if(notas>=0 && notas<=10){
                    masculino[contadorNotasMasculino]=notas;                   
                    contadorNotasMasculino++;
                    contadorNotas++;
                    if(notas>=6){
                        varonesMayoroIgualA6++;
                    }
                }
                else{
                    alert("ingrese una nota valida entre 0 y 10");
                }
            }              
            else if(genero=="f"){
                notas=prompt("ingrese la nota mayor a 0 y menor a 10 del alumno "+(contadorNotas+1)+" de sexo femenino");
                if(notas>=0 && notas<=10){
                    femenino[contadorNotasFemenino]=notas;
                    contadorNotasFemenino++;
                    contadorNotas++;
                }
                else{
                    alert("ingrese una nota valida entre 0 y 10");
                }
            }
            else{
                alert("ingrese un genero valido");
            }
        }
        
        var totalNotasMasculino=0;
        var totalNotasFemenino=0;
        var promedioNotas;
        var notaMasBaja;        
        
            for(var i=0; i<masculino.length; i++){
                totalNotasMasculino=parseInt(totalNotasMasculino);
                masculino[i]=parseInt(masculino[i]);
                totalNotasMasculino=totalNotasMasculino+masculino[i];
            }
            for(var i=0; i<femenino.length; i++){
                totalNotasFemenino=parseInt(totalNotasFemenino);
                femenino[i]=parseInt(femenino[i]);
                totalNotasFemenino=totalNotasFemenino+masculino[i];
            }
            promedioNotas=(totalNotasFemenino+totalNotasMasculino)/6;
        
        var minFemenino=Math.min.apply(null, femenino);
        var minMasculino=Math.min.apply(null, masculino);
        
            if(minFemenino>minMasculino){
                notaMasBaja=minMasculino;
                document.write("a) El promedio de las notas fue "+promedioNotas+
                           "</br>b) La nota mas baja fue "+notaMasBaja+", fue de un hombre"+
                           "</br>c) La cantidad de varones que su nota fue mayor o igual a 6 fue de "+varonesMayoroIgualA6);
            }
            else{
                notaMasBaja=minFemenino;
                document.write("a) El promedio de las notas fue "+promedioNotas+
                           "</br>b) La nota mas baja fue "+notaMasBaja+", fue de una mujer"+
                           "</br>c) La cantidad de varones que su nota fue mayor o igual a 6 fue de "+varonesMayoroIgualA6);
            }
                
        
	
}

