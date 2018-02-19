//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var baseTriangulo;
    var perimetro;
    
        baseTriangulo=document.getElementById('lado').value;
        perimetro=baseTriangulo*3;
        
        alert("La base del triangulo es "+perimetro);
        
}

