function Mostrar()
{
    var numeroUno, numeroDos;
    var resultado;
    
    numeroUno=prompt("Ingrese el numero 1");
    numeroDos=prompt("Ingrese el numero 2");
    
    if(numeroUno==numeroDos){
        resultado=numeroUno*numeroDos;        
        document.write("Dado que los numeros son iguales se procede a multiplicar y el resultado es "+resultado);
    }
    else if(numeroUno>numeroDos){
        resultado=numeroUno-numeroDos;
        document.write("Dado que el primer numero es mayor al segundo se procede a restar y el resultado es "+resultado);
    }
    else {
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        resultado=numeroUno+numeroDos;
        document.write("Dado que el segundo numero es mayor que el primero se procede a sumar y el resultado es "+resultado);
    }
}
