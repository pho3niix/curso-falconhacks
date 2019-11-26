// Clase *******************************************************

// // imprimir en consola
console.log('Hello Mars');

// // comentarios
/**Hola Mundo */
// Hola Marte
//soy un comentario de una sola linea
/** soy un comentario de multilinea
 * dasdas
 * dsa
 * d
 * asd
 * sad
*/

// Variables
var nombre = 'Hugo';
var edad = 23;
var hobbie = 'Programacion';
console.log('Hola mi nombre es ' + nombre + ' tengo ' + edad + 'años y la ' + hobbie + 
' es mi pasion' );

// // variables tipo numerico
var a = 12;//integer
var b = 13.5;//float
var c = 15;//integer
var d = 15.5545656565656;//double

// // Operaciones matematicas
var resultado = a + b + c;
var resultado2 = a-c+b;
console.log(resultado2);

// // variables tipo string
var greet = 'Hola';
var nombre = 'Carlos';
var Nombre = 'Hugo';
console.log(greet + ' ' + nombre);
console.log(greet,nombre);
console.log(`${greet} ${nombre}`);

// variables tipo boolean
var a = true;
var b = false;
var c = 1 + a;
console.log(a);
console.log(c);

// operadores de comparadores
console.log(5>3);//mayor
console.log(5==3);//igual
console.log(5<3);//menor
console.log(5!=3);//not
console.log(5<=3);//menor o igual
console.log(5>=3);//mayor o igual
console.log(5>='HOLA');//mayor o igual

// OPERADORES logicos
// AND = &&
// OR = ||
// NOT = !

// AND
console.log('true and false: ', true && false);
console.log('false and true: ', false && true);
console.log('false and false: ', false && false);
console.log('true and true: ', true && true);

// OR
console.log('True or false:', true || false);
console.log('false or true:', false || true);
console.log('true or true:', true || true);
console.log('false or false:', false || false);

var a = 2;
var b = 3;

if(a==1 && b ==2){
    console.log('cool');
}else{
    console.log('no cool');
}

// Estructura de datos

// Strings indexing
var name = 'Hugo';
var res = name[0];
console.log(res);

// String Slicing
var name = 'Carlos';
var res = name.slice(0,3);
console.log(res);

// arreglos
var array = [1,2,3,4,5,6];
var alumnos = ['Hugo', 'Allie', 'Abner'];
var maestro = new Array();
var vacio = [];
console.log(alumnos);

// Agregar elementos a un arreglo y eliminar el ultimo elmento de un arreglo

// Borrar elementos especifico en un arreglo
alumnos.splice(4,1);
console.log(arreglo);

// Arreglo slicing
var arreglo=[];
arreglo.push('Rogelio');
arreglo.push('Alonso');
arreglo.push('Hugo');
arreglo.push('Jose');
arreglo.push('Pepito');
console.log(arreglo.slice(2,5))

// Objetos o Diccionarios
var obj = 
{
    "nombre":"Hugo",
    "edad": 23,
    "hobbie": "Programar"
};
console.log(obj.nombre);
console.log(obj.edad);
console.log(obj.hobbie);

console.log(Object.values(obj));
var arreglo = Object.values(obj);
console.log(arreglo[1]);

// Arreglo de objetos
var array = [
    {
        "nombre":"Hugo",
        "edad": 23,
        "hobbie": "Programar"
    },
    {
        "nombre":"Armando",
        "edad": 20,
        "hobbie": "Video Juegos"
    }
]

// Eliminar un objeto de un arreglo
array.splice(0,1);
console.log(array);

// Agregar un objeto a un arreglo
array.push(
    {
        "nombre":"Bertha",
        "edad": 23,
        "hobbie":"Futbol"
    }
)
console.log(array);

// Condicionales
var a  = 6

if (a>1){
    console.log("Valor mayor que uno");
} else {
    console.log("Valor menor o igual a uno");
}

if (a == 1) {
    console.log("Escogiste la opción 1");
} else if(a == 2){
    console.log("Escogiste la opción 2");
} else if(a == 3){
    console.log("Escogiste la opción 3");
} else if(a == 4){
    console.log("Escogiste la opción 4");
} else if(a == 5){
    console.log("Escogiste la opción 5");
} else {
    console.log("Opción no soportada");
}

// Bucles
var limite = 10;
for(let i=0;i<limite;i++){
    console.log(i+1);
}

var alumnos = ['Bertha', 'Allie', 'Hugo', 'Abner', 'Pedro', 'Alejandro'];

for(let i = 0; i<alumnos.length; i++){
    console.log(alumnos[i]);
}

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

console.log('Id | Nombre | ' + 'Materia');
for(let i=0; i<maestros.length; i++){
    console.log(maestros[i].id +' '+ maestros[i].nombre +' '+ maestros[i].materia);
}

// Funciones
function greet(){
    return 'Hola';
}

function same(){
    let now = 'Saludos';
    return now;
}
console.log(now);

var sol = 'Vientos';
function other(){
    return sol;
}

function params(nombre){
    return 'Hola ' + nombre;
}

function condicion(a){
    if(a==1){
        return 'Elegiste la opcion 1';
    }else if(a==2){
        return 'Elegiste la opcion 2';
    }else if(a==3){
        return 'Elegiste la opcion 3';
    }else{
        return 'Fuera de rango';
    }
}

function varios(a,b){
    var resultado = a + b;
    return resultado;
};

hola=()=>{
    return 'Hola';
}

//llamar a una funcion
hola();
condicion(1);
condicion(2);
same();
varios(1,2);
varios(12,15);