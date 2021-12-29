// Prompt es un cuadro de alerta en el cual se encuentra un cuadro para ingresar texto y almacenar informacion en una variable
let nombre = prompt("Decime tu nombre: ");
alert("Hola" + nombre);

// Metodo de cadena 'concat', para la concatenacion de numeros
number = 3;
number2 = 3;
concate = "";

concatenacion = concate.concat(number, number2);

// Funciones
function saludar(){
    let respuesta = prompt("Hola, Como fue tu dia?");
    if(respuesta == "bien"){
        alert("me alegro...");
    }else{
        alert("una pena");
    }
}

const saludar = function(){
    let respuesta = prompt("Hola, Como fue tu dia?");
    if(respuesta == "bien"){
        alert("me alegro...");
    }else{
        alert("una pena");
    }
}

// En JS los retornos son a gusto del programador
function mudarse(){
    alert("Funcion retorno");
    return "Retorno de la funcion";
}

let retorno = mudarse();

alert(retorno); // Esto mostrara un alert y luego el retorno de la funcion mudarse

// Funciones flecha en JS
const saludo = (nombre)=>{
    document.write("Hola como estas? " + nombre); 
}

saludo("Guido"); // De esta forma saludaria a Guido