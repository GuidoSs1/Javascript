// Arrays 
let frutas = ["banana", "manzana", "mango", "pera"];
alert(frutas); // Muestra directamente todos los elementos dentro del array

alert(frutas[19]); // Esto mostrara el valor 'undefined', ya que el array al declararlo, se declaran todas las posiciones posibles

// Arrays asociativos
let pc = {
    nombre: "GuidoPC",
    procesador: "I5",
    ram: "8GB",
    espacio: "1TB"
} // Esto es un objeto

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let pcFrase = `El nombre del PC es: <b>${nombre}</b> <br/>
El procesador del PC es: <b>${procesador}</b> <br/>
La RAM  del PC es: <b>${ram}</b> <br/>
El espacio del PC es: <b>${espacio}</b> <br/>
`;
alert(pcFrase); // De este modo se podra mostrar todos los datos del objeto
alert(pc["nombre"]); // Asi se mostraran los datos dentro de un objeto del tipo anterior, esto mostrara GuidoPC

