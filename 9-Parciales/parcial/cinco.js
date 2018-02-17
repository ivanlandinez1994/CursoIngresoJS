function Mostrar()
{
    var diaSemana;
    var lunes, martes, miercoles, jueves, viernes, sabado, domingo;
    
        
        diaSemana=prompt("ingrese un dia de la semana en minusculas");
        
        switch(diaSemana){
            case "lunes":
            case "martes":
            case "miercoles":
            case "jueves":
            case "viernes":        
                alert("a trabajar !!!");
            break;
            
            case "sabado":
            case "domingo":
                alert("es fin de semana");
            break;
        }
                
        
        
        
}
