function Mostrar()
{
    var mes;
        
        mes=document.getElementById('mes').value;
        
        switch(mes){
            case "Febrero":
                alert("Este mes no tiene mas de 29 d�as.");
            break;
            
            case "Enero":
            case "Marzo":                
            case "Abril":
            case "Mayo":
            case "Junio":
            case "Julio":
            case "Agosto":
            case "Septiembre":
            case "Octubre":
            case "Noviembre":
            case "Diciembre":            
                alert("Este mes tiene 30 o mas dias.");
            break;
            
            
            
            
        }
}