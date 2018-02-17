function Mostrar()
{
    var mes;
        mes=document.getElementById('mes').value;
        
        switch(mes){
            case "Febrero":
                alert("Este mes tiene 28 Dias");
            break;
            case "Enero":
            case "Marzo":
            case "Mayo":
            case "Julio":
            case "Agosto":
            case "Octubre":
            case "Diciembre":
                alert("Este mes tiene 31 Dias");
            break;
            case "Abril": 
            case "Junio":
            case "Septiembre":
            case "Noviembre":
                alert("Este mes tiene 30 Dias");
            break;
        }
}