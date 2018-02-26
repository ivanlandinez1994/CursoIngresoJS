function Mostrar()
{
    var importe;
    var descuento;
    var descuentoaRealizar;
    var importeFInal;
    
    importe=prompt("ingrese el importe del producto");
    descuento=prompt("Ingrese el porcentaje de descuento a realizar");

    descuentoaRealizar=descuento/100;
    
    importeFinal=" el importe final es "+(importe-(importe*descuentoaRealizar));
    
    document.getElementById('importeFinal').value=importeFinal;
    
    
    
}
/*
	pedir precio, y porcentaje de descuento que se va a hacer 
	mostrar precio final
*/
