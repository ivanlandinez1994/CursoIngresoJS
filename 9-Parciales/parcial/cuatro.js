function Mostrar()
{
    var numeroUno, numeroDos, numeroTres;
    var numeroMayor;
    var numeroMenor;
    
    numeroUno=prompt("Ingrese el numero 1");
    numeroUno=parseInt(numeroUno);
    numeroDos=prompt("Ingrese el numero 2");
    numeroDos=parseInt(numeroDos);
    numeroTres=prompt("ingrese el numero 3");
    numeroTres=parseInt(numeroTres);
    
    if(numeroUno>numeroDos && numeroUno>numeroTres){
        numeroMayor=numeroUno;
        if(numeroDos<numeroTres){
            numeroMenor=numeroDos;
        }
        else{
            numeroMenor=numeroTres;
        }
    }
    else if(numeroDos>numeroUno && numeroDos>numeroTres){
        numeroMayor=numeroDos 
        if(numeroUno<numeroTres)       {
            numeroMenor=numeroUno;
        }
        else{
            numeroMenor=numeroTres;
        }
    }
    else {
        numeroMayor=numeroTres;
        if(numeroUno<numeroDos){
            numeroMenor=numeroUno;
        }
        else{
            numeroMenor=numeroDos;
        }
    }

    /*if(numeroUno<numeroDos && numeroUno<numeroTres){
        numeroMenor=numeroUno;
    }
    else if(numeroDos<numeroUno && numeroDos<numeroTres){
        numeroMenor=numeroDos        
    }
    else {
        numeroMenor=numeroTres;
    */
    document.write("el numero mayor es "+numeroMayor+"<br>el numero menor es "+numeroMenor);

}
/*
    ingresar 3 numeros informar cual es el mayor
*/