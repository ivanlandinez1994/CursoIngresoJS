function Mostrar()
{    
    var letra;
    var numero;
    var parar;
    var totalPositivos=0;
    var promedioPositivos;
    var numerosImpares=0;
    var sumaNumerosLetraBocal=0;
    var maximo=0;
    var maxLetra;
    var contador=0;
        
        while(parar!="parar"){
            contador++;
            letra=prompt("Ingrese una letra");
                while(!isNaN(letra)){
                    letra=prompt("Ingrese una letra");
                }
            numero=prompt("ingrese un numero mayor o igual a -50 y menor o igual a 50");
            numero=parseInt(numero);
                while(numero< -50 || numero>50 || isNaN(numero)){
                    numero=prompt("ingrese un numero mayor o igual a -50 y menor o igual a 50");
                    numero=parseInt(numero);
                }
            if(numero>=0){
                totalPositivos=totalPositivos+numero;
            }
            if(numero%2!=0){
                numerosImpares++;
            }
            switch(letra){
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    sumaNumerosLetraBocal=numero+sumaNumerosLetraBocal;
                break;
            }
            if(numero>maximo){
                maximo=numero;
                maxLetra=letra;

            }

            parar=prompt("si desea parar escriba parar");
        }
        promedioPositivos=totalPositivos/contador;
        document.write("el promedio de los numeros positivos es "+promedioPositivos+
                        "<br>La cantidad de numeros impares es "+numerosImpares+
                        "<br>La suma de todos los numeros cuya letra haya sido una bocal es "+sumaNumerosLetraBocal+
                        "<br>El numero maximo fue "+maximo+ " y su letra fue "+maxLetra);



}
// ingresar dos datos primero una letra luego un numero
// los numeros van a aestar entre -50 y 50
// informar promedio de los numeros positivos
// cantidad numeros impares;
// suma de todos los numeros cuya letra haya sido una bocal;
// numero maximo y la letra con la que fue ingresado;