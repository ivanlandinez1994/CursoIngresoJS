//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var sexo;
	var contadorAlmunos=0;
	var sumatoriaNotas=0;
	var promedioNotas;
	var notaMin=10;
	var varonesNotaMayor6=0;
		
		while(contadorAlmunos<6){			
			notas=prompt("Ingrese la nota del alumno "+(contadorAlmunos+1));
			if(notas>=0 && notas<=10){				
				if(notas<notaMin){
					notaMin=notas;
				}
				sexo=prompt("ingrese el genero del alumno (f) para femenino (m) para masculino "+(contadorAlmunos+1));

				if(sexo=="m" || sexo=="f"){
					sumatoriaNotas=parseInt(sumatoriaNotas);
					notas=parseInt(notas);
					sumatoriaNotas=sumatoriaNotas+notas;
					contadorAlmunos++;

					if(sexo=="m"){
						if(notas>=6){
							varonesNotaMayor6++;
						}
					}
					
				}

				else{
					alert("ingrese un sexo correcto (f) para femenino o (m) para masculino");
				}						
			}
			else {
				alert("ingrese una nota mayor a igual a 0 y menor a 10");
			}
		}
		promedioNotas=sumatoriaNotas/6;

		document.write("a) El promedio de las notas totales "+promedioNotas+
						"<br>b) La nota mas baja fue "+notaMin+
						"<br>c) La cantidad de varones que su nota fue mayor o igual a 6 fue de "+varonesNotaMayor6+ " estudiantes");


}

