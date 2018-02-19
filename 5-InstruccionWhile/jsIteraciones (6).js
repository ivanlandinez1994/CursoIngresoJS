function Mostrar()
{
    var numeros;
    var sumaAcumulada=0;
    var contador=0;
    var promedio;
        while(contador<5){
            numeros=prompt("ingrese el nunero "+(contador+1));
            sumaAcumulada=parseInt(sumaAcumulada);
            numeros=parseInt(numeros);
            sumaAcumulada=sumaAcumulada+numeros;
            contador++;

        }
        promedio=sumaAcumulada/5;

        document.getElementById('suma').value=sumaAcumulada;
        document.getElementById('promedio').value=promedio;
}//FIN DE LA FUNCIÓN