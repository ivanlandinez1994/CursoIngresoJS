//Debemos lograr mostrar un mensaje al presionar el botÃ³n  'MOSTRAR'.
function Mostrar()
{	
    var mesDelAno;        
    
        mesDelAno=prompt("ingrese un mes del año");          
        
        switch(mesDelAno=mesDelAno.toUpperCase(), mesDelAno=mesDelAno.toLowerCase()){               
            case "enero":
            case "febrero":
                alert("Veranito¡¡¡");
            break;
            default:
                alert("Extraño enero y febrero");
            break;
        }
        
}

