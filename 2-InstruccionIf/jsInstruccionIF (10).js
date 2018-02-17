function Mostrar()
{
    var notaRandom;
        
        notaRandom=Math.floor((Math.random()*10) + 1);
        
        if (notaRandom>8){
            alert("EXCELENTE");
        }
        else if(notaRandom>=4 && notaRandom<=8){
            alert("APROBO");
        }
        else{
            alert("Vamos la proxima se puede");
        }
	

}//FIN DE LA FUNCIÓN