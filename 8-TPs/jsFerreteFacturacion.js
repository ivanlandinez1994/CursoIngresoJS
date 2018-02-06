/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio_p1, precio_p2, precio_p3;
    var resultado;
    
        precio_p1=document.getElementById('PrecioUno').value;
        precio_p2=document.getElementById('PrecioDos').value;
        precio_p3=document.getElementById('PrecioTres').value;
        
        precio_p1=parseInt(precio_p1);
        precio_p2=parseInt(precio_p2);
        precio_p3=parseInt(precio_p3);
        resultado=parseInt(resultado);
        
        resultado=precio_p1+precio_p2+precio_p3;
        
        alert("el precio final de los productos es de "+resultado);
        
}
function Promedio () 
{
    var precio_p1, precio_p2, precio_p3;
    var resultado;
    
        precio_p1=document.getElementById('PrecioUno').value;
        precio_p3=document.getElementById('PrecioDos').value;
        precio_p2=document.getElementById('PrecioTres').value;
        
        precio_p1=parseInt(precio_p1);
        precio_p2=parseInt(precio_p2);
        precio_p3=parseInt(precio_p3);
        resultado=parseInt(resultado);
        
        resultado=(precio_p1+precio_p2+precio_p3)/3;
        
        alert("el promedio del precio de los productos es "+ resultado);
}
function PrecioFinal () 
{
    var precio_p1, precio_p2, precio_p3;
    var resultado;
    var iva;
    
        precio_p1=document.getElementById('PrecioUno').value;
        precio_p2=document.getElementById('PrecioDos').value;
        precio_p3=document.getElementById('PrecioTres').value;
        
        precio_p1=parseInt(precio_p1);
        precio_p2=parseInt(precio_p2);
        precio_p3=parseInt(precio_p3);        
        resultado=parseInt(resultado);
        iva=parseInt(iva);
        
        iva=((precio_p1+precio_p2+precio_p3)*0.21);
        resultado= (precio_p1+precio_p2+precio_p3) + iva;
        
        alert("el precio final de los productos mas el iva es de "+resultado);
        
}