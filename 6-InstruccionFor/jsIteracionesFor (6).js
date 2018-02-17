function Mostrar()
{
    var numero;
    var pares;
    var contadorPares=0;
    
        numero=prompt("ingrese un numero");
        
        for(pares=1; pares<=numero; pares++ ){            
            if(pares%2==0){
                alert(pares);
                contadorPares++;
            }
        }
        alert("hay "+contadorPares+" pares");
       


}//FIN DE LA FUNCIÓN