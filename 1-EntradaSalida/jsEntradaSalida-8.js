/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
        var divisor;
        var resto;
            dividendo=document.getElementById('numeroDividendo').value;
            divisor=document.getElementById('numeroDivisor').value;        
            //no se pone parseInt dado que no es necesario y si se pone el parseInt cambia a enter
            //y tendremos problemas ocn los decimales.
            resto=dividendo%divisor;
            
            alert("El resto es "+resto);
}
