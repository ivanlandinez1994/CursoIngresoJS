/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo, ancho;
    var cantidadAlambre;
    
        largo=document.getElementById('Largo').value;
        ancho=document.getElementById('Ancho').value;
        
        largo=parseInt(largo);
        ancho=parseInt(ancho);
        cantidadAlambre=parseInt(cantidadAlambre);
        
        cantidadAlambre=((largo+ancho)*2)*3;
        
        alert("la cantidad de alambre a comprar es de "+ cantidadAlambre);
}
function Circulo () 
{
    var radio;
    var area_terreno;
    var cantidadAlambre;
        
        radio=document.getElementById('Radio').value;
        
        radio=parseInt(radio);
        cantidadAlambre=parseInt(cantidadAlambre);
        area_terreno=parseInt(area_terreno);
        
        area_terreno=radio*radio;
        cantidadAlambre=area_terreno*3;
        
        alert("dado que el area del terreno es de "+area_terreno+ 
        "\nla cantidad de alambre que se debe comprar es "+cantidadAlambre);
        /* la opcion \n sirve para dar un espacio en el texto que aparecera en pantalla 
        como si fuera un enter.*/
}
function Materiales () 
{
    var largo, ancho;
    var bolsasCemento, bolsasKal;
    var cemento=2 , kal=3 ;
    
        
        largo=document.getElementById('Largo').value;
        ancho=document.getElementById('Ancho').value;
        
        largo=parseInt(largo);
        ancho=parseInt(ancho);
        bolsasCemento=parseInt(bolsasCemento);
        bolsasKal=parseInt(bolsasKal);
        
        bolsasCemento= cemento*(largo*ancho);
        bolsasKal= kal*(largo*ancho);
        
        alert("para las medidas del terreno ingresado necesitara:\n"+bolsasCemento+" bolsas de cemento.\n"+
              bolsasKal+" bolsas de kal.");
        
        
        
        
}