function Mostrar()
{
    var numero1, numero2;
    var sumaNumeros;
    
        numero1=prompt("ingrese el primer numero");
        numero2=prompt("ingrese el segundo numero");
        
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        sumaNumeros=numero1+numero2;
        
        if(sumaNumeros>0){
            document.write("El resultado de la suma es positivo</br>El resultado fue "+sumaNumeros);
        }
        else if(sumaNumeros==0){
            documento.write("El numero es cero");
        }        
        else{
            document.write("El numero es negativo</br>El resultado fue "+sumaNumeros);
        }
        
}
