function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	alert(estadoCivil);



	if(edad<18 && estadoCivil!="Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}	

	


}//FIN DE LA FUNCIÓN