//EJEMPLO sin PARAMETROS
function suma(parametros){
    //instrucciones
    return number + number;
}

function mostrarDia(){
    var fecha = new Date();
    alert("hoy es dia"+fecha.getDate())
}

mostrarDia(); //Así llamo la funcion creada aqui arriba
            //para llamarla en cualquier parte de mi código



//EJEMPLO CON PARAMETROS

            function areaCirculo(radio){
            var area = Math.PI * Math.pow(radio, 2)
            alert("el area es" + area)
        }

areaCirculo(20);

//funcion anonima
var cuadrado = function(number){
    return number*number;

}
//llamada a la funcion
var resultado = cuadrado(4) 



//las sig variables están definidas en el ambito global
var numeroUno = 20, 
    numeroDos = 3, 
    nombre = mesi;

//esta func se define en el ambito global
function multiplicar (){
    return numeroUno * numeroDos
}

multiplicar()//retorna 60





//un ejemplo de funcion anidada 
function obtenerPuntaje(){
    var numeroUno = 2, numeroDos = 3;

function agregar() {
    return nombre + "puntaje" + (numeroUno + numeroDos)
 }
    return agregar(); 
}

obtenerPuntaje();
//retorna mesi puntaje 5