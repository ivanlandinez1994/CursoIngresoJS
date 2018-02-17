function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    var metrosAlambre;
    
        largo=document.getElementById('largo').value;
        ancho=document.getElementById('ancho').value;
        
        largo=parseInt(largo);
        ancho=parseInt(ancho);
        
        perimetro=(largo+ancho)*2;
        metrosAlambre=perimetro*3;
        
        alert("para cubrir todo el perimetro con 3 hilos de alambre se necesitan "+metrosAlambre+" metros.");
        
}
