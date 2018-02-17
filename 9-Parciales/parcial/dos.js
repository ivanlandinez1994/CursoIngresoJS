function Mostrar()
{
    var importe;
    var importeFInal;
    
    importe=prompt("ingrese el importe del producto");
    
    importeFinal=" el importe final con IVA (21%) es: "+(importe*1.21)+"$";
    
    document.getElementById('importeFinal').value=importeFinal;
    
    
    
}
