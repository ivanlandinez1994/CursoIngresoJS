function Mostrar()
{
    var mes;
        mes=prompt("ingrese un mes");
        mes=mes.toUpperCase();
        mes=mes.toLowerCase();
        switch(mes){
            case "enero":
                alert("Comienza el a�o");
            break;
            case "diciembre":
                alert("Se vienen las fiestas");
            break;
            default:
                alert("No es ni enero ni diciembre");
            break;
            
            
        }
}
