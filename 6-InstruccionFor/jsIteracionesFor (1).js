function Mostrar()
{
    /*for(var numero=1;numero<11;numero++){
        alert(numero);
    }*/
    var contador=0;
    for(;;){
    	contador++;
    	document.write("<br>"+contador);
    	if(contador==10){
    		document.write("<br>break"+contador);
    		break;
    	}
    	if(contador==5){    		
    		continue;
    	}
    	document.write("<br>continue "+contador);
    }
}