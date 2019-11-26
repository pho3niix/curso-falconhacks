# Ejercicios dia 1 (Fundamentos de programacion en javascript)

## Ejercicios basicos de programacion

### Imprimir en consola
Para imprimir un mensaje en consola se usa el siguiente codigo:
```javascript
console.log('Hello Mars')
```
### Comentarios
Los comentarios son utiles para los programadores ya que les sirven para recordar lo que hace su codigo tiempo despues de haber escrito su codigo:
```javascript
// Soy un comentario de una sola linea
/*Soy un comentario 
multilinea*/
console.log('Hello Mars')
```
### Variables
Existen 2 formas para declarar variables (var y let), la primera es comun usarla para variables globables y la segunda solamente en variables locales:
```javascript
var name = 'Hugo';//global
function greet(){
    let saludo = 'Hola';//local
    return saludo + ' ' +  name;
}
```
### Variables tipo numerico
Javascript interpreta en automatico el tipo de valor que se le esta asignando por lo tanto no es necesario indicar el tipo de variable
```javascript
//Esto es correcto
var numero = 1;
var cadena = 'Hola';
var booleano = true;
var flotante = 12.5;
var doble = 12.254546565648545;

//esto no es correcto
var int numero = 1;
var String cadena = 'Hola';
var bool booleano = true;
var float flotante = 12.5;
var double doble = 12.254546565648545;
```
### Operaciones aritmeticas
Es posible realizar operaciones con javascript de la siguiente forma:
```javascript
var a = 6;
var b = 22;
var suma = a + b;
var resta = a - b;
var division = a / b;
var multiplicacion = a * b;
var compuesta = (((a + b) * b ) - (a/b))/a;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(compuesta);
```
### Variables tipo String o Cadenas de texto
Variables tipo String se representan en codigo siempre entre comillas simples o dobles de la siguiente forma:
```javascript
//Esto es correcto
var nombre = 'Hugo';
var apellido = "Costilla";

//Esto no es correcto
var nombre = Hugo;
var apellido = Costilla;
//De esta manera javascript interpreta el valor asignado como una variable, de no estar declaradas con anterioridad se imprimira un error
```
### Variables booleanas
Este tipo de variables retornan solamente 2 resultados posible ya sea falso o verdadero.

Nota: no es necesario asignar el valor entre comillas.
```javascript
var verdarero = true;
var falso = false;
```
### Operadores logicos
Los operadores lógicos nos proporcionan un resultado a partir de que se cumpla o no una cierta condición estos producen un resultado booleano:
```javascript
// tabla de verdad operador AND (&&) 
console.log('true and false: ', true && false);//false
console.log('false and true: ', false && true);//false
console.log('false and false: ', false && false);//false
console.log('true and true: ', true && true);//true

// tabla de verdad operador OR (||)
console.log('True or false:', true || false);//true
console.log('false or true:', false || true);//true
console.log('true or true:', true || true);//true
console.log('false or false:', false || false);//false
```
### Arreglos
Los arreglos (arrays o matrices) son objetos de tipo lista cuyo prototipo tiene metodos para realizar operaciones de recorrido.

Nota: la numeracion de los elementos en un arreglo parte desde 0 en adelante.

En javascript existen 2 formas de declarar  un arreglo vacio:
```javascript
var arreglo1 = [];
var arreglo2 = new Array();
```
### Agregar elementos a un arreglo
```javascript
//Definir directamente los valores al momento de declarar el arreglo
var alumnos1 = ['Hugo', 'Pedro', 'Allie', 'Claudia', 'Abner'];

//Declarando un arreglo vacio y asignar valores con el metodo push
var equipos = new Array();
equipos.push('Javascricos');
equipos.push('Dream team');
equipos.push('A.I.M.A.');
```
### Borrar elementos de un arreglo
Para borrar elementos de un arreglo se puede utilizar el metodo pop() el cual borra el ultimo elemento de un arreglo y con el metodo splice que borra un elemento especifico del arreglo
```javascript
var alumnos1 = ['Hugo', 'Pedro', 'Allie', 'Claudia', 'Abner'];
alumnos1.pop();
//retorna alumnos1 ['Hugo', 'Pedro', 'Allie', 'Claudia', 'Abner']
alumnos1.splice(2,1);
//retorna alumnos1 ['Hugo', 'Pedro', 'Claudia', 'Abner']
```
### Diccionarios u Objetos
Un diccionario u objeto es similar a una lista o arreglo, pero, en lugar de utilizar índices para identificar cada valor, se utilizan "llaves". Cada valor tiene asociada una llave específica, la cual sirve para llamarlo.
```javascript
var obj1 = 
{
    nombre:"Hugo",
    edad: 23,
    hobbie: "Programar"
};
//En el caso anterior nombre, edad y hobbie son las llaves para accesar a la info del objeto. Para imprimir un elemento de un diccionario se haec de la siguiente forma:
console.log(obj1.nombre);//retorna "Hugo"
console.log(obj1.edad);//retorna 23

// El siguiente codigo declara un objeto vacio y a continuacion se le asignan valores
var obj2 = new Object();
obj2.nombre = "Pedro";
obj2.edad = 20;
obj2.hobbie = "Hobbie";

console.log(obj1.nombre);//retorna "Pedro"
console.log(obj1.edad);//retorna 20
```
### Array de diccionarios
Existe la posibilidad de almacenar en un arreglo diccionarios u objetos de la siguiente forma:
```javascript
var maestros = [
    {
        nombre:"Pedro",
        materia: "Filosofia",
        id: 1
    },
    {
        nombre:"Miguel",
        materia: "Redes",
        id: 2
    },
    {
        nombre:"Allie",
        materia: "Programacion",
        id: 3
    },
    {
        nombre:"Abner",
        materia: "Experiencia de usuario",
        id: 4
    }
];
// Para acceder a los elementos almacenados se hace de la siguiente forma:
console.log(maestros[0].nombre);
console.log(maestros[1].nombre);
console.log(maestros[2].nombre);
console.log(maestros[3].nombre);

//Para insertar nuevos elementos se hace de la siguiente forma:
maestros.push(
    {
        nombre:"Bertha",
        materia: "Marketing",
        id: 5
    }
)
```