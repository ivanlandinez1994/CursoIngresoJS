function Mostrar()
{
    var importeProducto;
    var importeFinal;
    
    
        importeProducto=prompt("ingrese el importe del producto");
        
        importeFinal=importeProducto*0.75;
        
        document.getElementById('importeFinal').value="el importe final es "+importeFinal;
}
