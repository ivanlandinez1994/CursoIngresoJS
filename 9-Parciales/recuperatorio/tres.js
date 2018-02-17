function Mostrar()
{
    var precio1, precio2, precio3;                
    var totalPrecios;
    var promedioPrecios;
    
        precio1=document.getElementById('precioUno').value;
        precio2=document.getElementById('precioDos').value;
        precio3=document.getElementById('precioTres').value;
        
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    totalPrecios=precio1+precio2+precio3;
    promedioPrecios=totalPrecios/3;
    alert("el precio total de los productos es "+totalPrecios+" Y el promedio es "+promedioPrecios);
}
