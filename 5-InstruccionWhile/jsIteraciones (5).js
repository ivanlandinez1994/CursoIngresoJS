function Mostrar()
{
    var sexo;
    
    sexo=prompt("ingrese su genero: (m) para masculino y (f) para femenino");
    
    while(sexo!="f" && sexo!="m"){
        sexo=prompt("ingrese su genero: (m) para masculino y (f) para femenino");
    }
    
    var genero;
        if (sexo=="f"){
            genero="Femenino";
        }
        else {
            genero="Masculino";
        }
        
    document.getElementById('Sexo').value="El genero ingresado fue "+ genero ;

}//FIN DE LA FUNCIÓN