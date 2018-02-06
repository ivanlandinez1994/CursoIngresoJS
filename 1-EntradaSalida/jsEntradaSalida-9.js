/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var sueldo_mas_aumento;
        sueldo=document.getElementById('sueldo').value;
                
        sueldo=parseInt(sueldo); 
        sueldo_mas_aumento=parseInt(sueldo_mas_aumento);
        
        //sueldo_mas_aumento=(sueldo*0.10)+sueldo;
        sueldo_mas_aumento=sueldo*1.1;
        document.getElementById('resultado').value=sueldo_mas_aumento;
        
	
}
