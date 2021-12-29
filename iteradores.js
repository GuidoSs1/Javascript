// A diferencia de C# en JS el foreach se define de la siguiente forma
let nombres = ["pedro", "guido", "juan"];
for(let nombre in nombres){
    // Este 'for in' devolvera el indice o posicion de los elementos
    document.write(nombres[nombre]); // De esta forma se mostrara el valor de cada elemento dentro de animales
    // CON 'FOR IN' SE MOSTRARA TAMBIEN LAS PROPIEDADES DE UN OBJETO, DE TENERLAS
}

for(let nombre of nombres){
    // Este 'for of' devolvera directamente el valor de cada elemento dentro del array
    document.write(nombre);
}

// Para la sentencia 'for' se puede utilizar dentro la sentencia 'continue' que continua con la iteracion luego de alguna logica aplicada
for(let i = 0; i < 1; i++){
    if(true){
        continue;
    }
}

// La sentencia 'label' permitira asginarle un nombre o identificador a un bloque de iteracion
forRancio:
for(let nombre of nombres){
    for(let nombre in nombres){
        break forRancio; // De esta forma de detendra el for of principal
    }
}