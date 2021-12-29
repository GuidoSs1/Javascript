let cadena = "cadena de prueba";
let cadenaUno = "";

// concat() : Concatena la cadena con la frase o variable dentro de los parentesis
let resultado = cadena.concat(cadenaUno);

// startsWith() : Es un metodo que devuelve un booleano dependiendo de si la caneda comienza con los caracteres de la cadena specificada dentro de los parentesis
resultado = cadena.startsWith(cadenaUno); // Devuelve true

// endsWith() : Es un metodo que devuelve un booleano dependiendo de si la caneda termina con los caracteres de la cadena especificada dentro de los parentesis
resultado = cadena.endsWith(cadenaUno); // Devuelve false

// includes() : Es un metodo que devuelve un booleano dependiendo de si la palabra especificada dentro de los parentesis forma parte de la cadena de texto
resultado = cadena.includes("hola"); // Devuelve False
resultado = cadena.includes("prueba"); // Devuelve true

// indexOf() : Devuelve la posicion en la que se encuentra el primer caracter de la palabra especificada dentro de los parentesis, en la cadena
resultado = cadena.indexOf("prueba"); //Devuelve 10 (la posicion de 'p' dentro de la cadena) en caso de no encontrar la palabra devuelve -1

// lastIndexOf() : Al igual que el anterior pero devolvera la posicion del ultimo caracter
resultado = cadena.lastIndexOf("cadena"); //Devuelve 5

// 
