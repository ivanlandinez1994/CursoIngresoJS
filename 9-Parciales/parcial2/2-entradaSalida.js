//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var importeMasIva;
    
        importe=prompt("Ingrese el importe");    
        importeMasIva=importe*1.21;
        
        document.getElementById('importe').value="El importe mas el iva es de "+importeMasIva;
	
}

