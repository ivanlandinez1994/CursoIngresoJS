function Mostrar()
{
    var contenedores=new Array();        
    var peso;
    var contador=0;
        
        while(contenedores.length<5){
            peso=prompt("ingrese el peso del "+(contador+1)+" contenedor");
            if(peso>0){
                contenedores[contador]=peso;
                contador++;                
            }
            else{
                alert("ingrese un valor mayor a 0");
            }
        }
        
        var max=Math.max.apply(null, contenedores);
        
        var min=Math.min.apply(null, contenedores);
    
        document.write("El contenedor mas pesado fue "+max+"</br>El contenedor menos pesado fue "+min);
}
