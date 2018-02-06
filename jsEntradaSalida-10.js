/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var importe;
    var importe_menos_descuento;
    
        importe=document.getElementById('importe').value;        
        
        importe=parseInt(importe);
        importe_menos_descuento=parseInt(importe_menos_descuento);
        
        importe_menos_descuento=importe-(importe*0.25);
        document.getElementById('resultado').value=importe_menos_descuento;
        
        
}
