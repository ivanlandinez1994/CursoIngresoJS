function Mostrar()
{   
    var notas;
    var genero;
    var masculino=new Array();
    var femenino=new Array();
    var contadorNotas=0;
    var contadorFemenino=0;
    var contadorMasculino=0;
    var cantidadVaronesNotaMayora6=0;
    
    
    
    while(contadorNotas<100){
        
        genero=prompt("ingrese el genero del estudiante "+(contadorNotas+1)+" (f) para femenino y (m) para masculino");
        
        if(genero=="f" || genero=="m"){
            notas=prompt("ingrese la nota del alumno "+(contadorNotas+1));  
            
            if (notas>=0 && notas<=10){
                if(genero=="f"){
                    femenino[contadorFemenino]=notas;
                    contadorFemenino++;
                }
                else if(genero=="m"){
                    masculino[contadorMasculino]=notas;
                    contadorMasculino++;
                    if(notas>=6){
                        cantidadVaronesNotaMayora6++;
                    }
                }
            }
            else{
                alert("ingrese una nota entre 0 y 10");
            }
            contadorNotas++;
        }
        else{
            alert("ingrese una letra correpondiente para validar el sexo");
        }
    }
    var sumatoriaNotasMasculino=0;
    var sumatoriaNotasFemenino=0;
    var sumatoriaTotal;
    var promedio;
    
    for (var i=0; i<(femenino.length); i++){
        sumatoriaNotasFemenino=parseInt(sumatoriaNotasFemenino);
        femenino[i]=parseInt(femenino[i]);
        sumatoriaNotasFemenino=sumatoriaNotasFemenino+femenino[i];
        
    }
    for (var i=0; i<(masculino.length); i++){
        sumatoriaNotasMasculino=parseInt(sumatoriaNotasMasculino);
        masculino[i]=parseInt(masculino[i]);
        sumatoriaNotasMasculino=sumatoriaNotasMasculino+masculino[i];
        
    }
    
    sumatoriaTotal=sumatoriaNotasMasculino+sumatoriaNotasFemenino;
    
    promedio=sumatoriaTotal/(femenino.length+masculino.length);   
    
    var min1=Math.min.apply(null,femenino);        
    var min2=Math.min.apply(null, masculino);
    
    
    if(min1>min2){
        alert("el promedio de las notas fue "+promedio+ "\nla nota mas baja fue "+min2+
               "\nla cantidad de varones que tuvieron una nota mayor o igual a 6 fue de "+cantidadVaronesNotaMayora6+
               "\nen total habian "+masculino.length+" varones"+"\nen total habian "+femenino.length+" mujeres");
    }
    else{
        alert("el promedio de las notas fue "+promedio+ "\nla nota mas baja fue "+min1+
                "\nla cantidad de varones que tuvieron una nota mayor o igual a 6 fue de "+cantidadVaronesNotaMayora6+
                "\nen total habian "+femenino.length+" mujeres"+"\nen total habian "+masculino.length+" varones");
    }
    
    
    
    
        
    
    
    
    
    
    
}
