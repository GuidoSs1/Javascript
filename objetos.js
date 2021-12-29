// Declaracion de una clase, las clases en JS pueden contener metodos, atributos, propiedades(que serian como atributos en C#), 
class Animal {
    constructor(especie, edad, color){
        this.especie = especie; // En JS, se asignan valores a una propiedad del objeto, en este caso como reemplazo de atributos(?)
        this.edad = edad; // Especie, edad y color son propiedades del objeto o clase que se declaran en este momento
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} anios y soy de color ${this.color}`;
    }
    verInfo() { // Las funciones flecha no pueden ser utilizadas como metodos dentro de una clase
        document.write(this.info + "<br>");
    }
}

const perro = new Animal("perro", 5, "negro"); // Los objetos siempre se declaran con 'const' ya que su valor nunca va a cambiar
const pajaro = new Animal("pajaro", 6, "verde");
const gato = new Animal("gato", 1, "gris");

// Herencia, se logra poniendo la palabra reservada 'extends' luego de nombre de la clase, seguido del nombre de la clase que va a heredar
class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, eded, color); // De esta forma se invoca al constructor de la clase base
        this.raza = raza;
    }
    ladrar(){
        alert("Waw!"); 
    }
    // Metodos setters y getters
    set setRaza(razaNueva){
        this.raza = razaNueva;
    }
    get getRaza(){
        return this.raza;
    }
}

const perroUno = new Perro("perro", 5, "marron", "bull dog"); // NO SE PUEDE INSTANCIAR UN OBJETO CON EL MISMO NOMBRE QUE LA CLASE
perroUno.verInfo(); // Escribira en la pagina la informacion del perro, segun el metodo de la clase animal

