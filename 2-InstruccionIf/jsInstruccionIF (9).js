function Mostrar()
{
    var numeroRandom;
    
        
        //document.getElementById('FormIngreso').value=numeroRandom;
             
        numeroRandom=Math.floor((Math.random()*10) + 1); 
        /* el Math.floor lo que hace es que el numero random sea entero, si el Math.floor se retira
        el numero empezara a darse con decimales*/
        /* Math.random()              *10)                            +1); 
                 |                      |                              |
           num aleatorio         numero maximo al azar          numero minimo al azar
         */
        
        alert("el numero random es "+ numeroRandom);
        

}//FIN DE LA FUNCIÓN