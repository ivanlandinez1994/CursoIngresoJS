
function Mostrar()
{
    var base;
    var altura;
    var perimetro;
    var superficie;
    
        base=document.getElementById('laBase').value;
        altura=prompt("Ingresa la altura del triangulo");
        
        superficie=(base*altura)/2;
        perimetro=base*3;
        
        document.write("El perimetro es "+perimetro+"<br>La superficie es de "+superficie );

        
        
        
}
