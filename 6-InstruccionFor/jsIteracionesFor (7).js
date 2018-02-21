function Mostrar()
{
    var numero;    
    var anterior
    var contadorDivisores;
    
        numero=prompt("ingrese un numero");
        numero=parseInt(numero);
        for(anterior=2; anterior<numero; anterior++){
            if(numero%anterior==0){
                document.write("<br>"+anterior);
                contadorDivisores++;
            }
            if(anterior>(numero/2)){
                break;
            }
        }
        if(contadorDivisores==0){
            document.write("es primo el numero ingresado");    
        }

//no dice por cual quieren que sepamos si es divisible;

}//FIN DE LA FUNCIÓN
