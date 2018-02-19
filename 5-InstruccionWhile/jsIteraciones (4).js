function Mostrar()
{
    var numero;                     
        
        numero=prompt("ingrese un numero del 0 al 9");

        while(numero<=0 || numero>=9){          
            alert("El "+numero+" esta fuera del rango solicitado porfavor intentelo nuevamente");                    
            
            numero=prompt("ingrese un numero del 0 al 9");
            
        }
            document.getElementById('Numero').value="El numero "+numero+" es correcto";
}//FIN DE LA FUNCIÓN