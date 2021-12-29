// Las varibles en JS no llevan una especificacion de tipo de valor, se definen por var let o const
var numero = 15; // No es utilizable actualmente
let nombre = "Guido"; // Este tipo de varible puede cambiar su valor al igual que 'var'
const apellido = false; // Este tipo de variable no podra cambiar nunca su valor con el que fue inicializado, este tipo de variable se debe inicializar al momento de declararla, de otro modo arrojara un error

// Cuando se declara una variable y no se inicializa se le da el valor 'undefined'
let documento; // documento = undefined
// En este lenguaje el valor 'null' es un valor intencional declarado por el programador

// Creacion de multiples variables
let numero1, numero2, numero3;
numero1 = 1;
numero2 = 2;
numero3 = 3;
let numero33 = 33, numero32 = 32;

// Concatenacion de variables numericas de forma dinamica
let number = 3;
let number2 = 3;

let concatencion = "" + number + number2; // Al poner las comillas dobles al inicio de la varible, se convierte en una cadena de texto

document.write(concatencion); // muestra 33

let frase = "Guido";
let frase1 = `Soy ${frase} y estoy caminando`; // Solo acepta con backticks o  acento fuerte, no funciona con comillas

document.write(frase1);