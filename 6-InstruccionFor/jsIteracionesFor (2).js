function Mostrar()
{
    for(var numero=10;numero>0;numero--){
        alert(numero);
    }

}
/*
function Mostrar()
{
    var numerosRandom;
    var cero=0;
    var uno=0;
    var dos=0;
    var tres=0;
    var cuatro=0;
    var cinco=0;
    var seis=0;
    var siete=0;
    var ocho=0;
    var nueve=0;

    var porcentajeCero;
    var porcentajeUno;
    var porcentajeDos;
    var porcentajeTres;
    var porcentajeCuatro;
    var porcentajeCinco;
    var porcentajeSeis;
    var porcentajeSiete;
    var porcentajeOcho;
    var porcentajeNueve;
    var iteraciones=100000;



    for(var contador=0; contador<iteraciones; contador++){
        numerosRandom=Math.floor(Math.random()*10);
        
        switch (numerosRandom){
            case 0:
                cero++;
            break;
            case 1:
                uno++;
            break;
            case 2:
                dos++;
            break;
            case 3:
                tres++;
                tres++;
                contador;
            break;
            case 4:
                cuatro++;
            break;
            case 5:
                cinco++;
            break;
            case 6:
                porcentajeSeis=(seis/iteraciones)*100;
                if(porcentajeSeis>7){
                    seis--;
                    continue;
                }
                else{
                    seis++;
                }                
            break;
            case 7:
                siete++;
            break;
            case 8:
                ocho++;
            break;
            case 9:
                nueve++;
            break;
        }
    }
    porcentajeCero=(cero/iteraciones)*100;
    porcentajeCero=Math.round(porcentajeCero);
    document.write("<br>cantidad 0: "+cero+" porcentaje: "+porcentajeCero+"%");

    porcentajeUno=(uno/iteraciones)*100;
    porcentajeUno=Math.round(porcentajeUno);
    document.write("<br>cantidad 1: "+uno+" porcentaje: "+porcentajeUno+"%");

    porcentajeDos=(dos/iteraciones)*100;
    porcentajeDos=Math.round(porcentajeDos);
    document.write("<br>cantidad 2: "+dos+" porcentaje: "+porcentajeDos+"%");

    porcentajeTres=(tres/iteraciones)*100;
    porcentajeTres=Math.round(porcentajeTres);
    document.write("<br>cantidad 3: "+tres+" porcentaje: "+porcentajeTres+"%");

    porcentajeCuatro=(cuatro/iteraciones)*100;
    porcentajeCuatro=Math.round(porcentajeCuatro);
    document.write("<br>cantidad 4: "+cuatro+" porcentaje: "+porcentajeCuatro+"%");

    porcentajeCinco=(cinco/iteraciones)*100;
    porcentajeCinco=Math.round(porcentajeCinco);
    document.write("<br>cantidad 5: "+cinco+" : "+porcentajeCinco+"%");

    porcentajeSeis=(seis/iteraciones)*100;
    porcentajeSeis=Math.round(porcentajeSeis);
    document.write("<br>cantidad 6: "+seis+" : "+porcentajeSeis+"%");

    porcentajeSiete=(siete/iteraciones)*100;
    porcentajeSiete=Math.round(porcentajeSiete);
    document.write("<br>cantidad 7: "+siete+" : "+porcentajeSiete+"%");

    porcentajeOcho=(ocho/iteraciones)*100;
    porcentajeOcho=Math.round(porcentajeOcho);
    document.write("<br>cantidad 8: "+ocho+" porcentaje: "+porcentajeOcho+"%");

    porcentajeNueve=(nueve/iteraciones)*100;
    porcentajeNueve=Math.round(porcentajeNueve);
    document.write("<br>cantidad 9: "+nueve+" : "+porcentajeNueve+"%");




}
*/