//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	
    var mesDelAno;        
    
        mesDelAno=prompt("ingrese un mes del a�o");          
        
        switch(mesDelAno=mesDelAno.toUpperCase(), mesDelAno=mesDelAno.toLowerCase()){               
            case "enero":
            case "febrero":
                alert("Veranito���");
            break;
            default:
                alert("Extra�o enero y febrero");
            break;
        }
        
}

