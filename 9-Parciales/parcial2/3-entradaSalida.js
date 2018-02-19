//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	
    var anchoTerreno, largoTerreno;
    var perimetro;
    var cantidadAlambre;
    
        anchoTerreno=document.getElementById('ancho').value;
        largoTerreno=document.getElementById('largo').value;
        
    anchoTerreno=parseInt(anchoTerreno);
    largoTerreno=parseInt(largoTerreno);
    perimetro=(anchoTerreno+largoTerreno)*2;
        cantidadAlambre=perimetro*6;
        
        alert("El perimetro del terreno es de "+perimetro+
              "\nPara cubrir todo el terreno se necesitan "+cantidadAlambre+" metros de alambre");
        
}

