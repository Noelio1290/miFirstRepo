console.log('hola desde el archivo de noel')

/* 
    Escribir un arreglo con cinco elementos
    Escribit una cadena y hacer que salga en la consola 5 veces
    Escribir una función que regrese la suma de dos números

 */

const miArreglo = [6, 9, 3, 1, 2]
for (let cogollos = 1; cogollos <= 5; cogollos += 1) {
    console.log('yo quiero cogollos ' + cogollos);
}

const arregloBidimensional = [
    [50, 5, 27, 400, 7],
    [0, 67, 90, 6, 97],
    [30, 14, 23, 251, 490],
]
for (let posicion = 0; posicion <= 2; posicion += 1) {
    console.log(arregloBidimensional[posicion])
}


console.log(arregloBidimensional);
// sin indice la consola no reproducira las partes de arregloBidimencional
console.log(arregloBidimensional[1]);
console.log(arregloBidimensional[0]);
console.log(arregloBidimensional[2]);

const calcularSuma = (numero, otroNumero) => {
    return numero + otroNumero
}

const calcularSuma2 = function (numero, otroNumero) {
    return numero + otroNumero
}

console.log(calcularSuma(24, 26))


 //Estructura de datos. R.Una estructura de datos es una forma que tenemos de guardar 
 //elementos en el ordenador, de tal forma que podemos acceder, crear y eliminar datos de una 
 //forma eficiente dependiendo de cada caso. Por ejemplo una lista es una estructura de datos, y 
 //una cola también

 //¿qué es? R. es una forma que tenemos de guardar elementos en el ordenador


 //¿Para qué funciona? R. para poder accesar, crear y eliminar datos de una forma 
 //eficiente dependiendo de cada caso


 //cada uno de los arreglos (repaso a todo) 

 // que son estructuras de control o lops de control   R.Las estructuras de control, denominadas
 // también sentencias de control, permiten tomar decisiones y realizar un proceso repetidas
 // veces. Se trata de estructuras muy importantes, ya que son las encargadas de controlar 
 //el flujo de un programa

 //// tipos de datos, primitivos y compuestos  R. En JavaScript, un primitive 
 //(valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos.
 // Hay 6 tipos de datos primitivos: string, number, bigint, boolean , undefined y symbol.
 // COMPUESTOS. Los datos compuestos son el tipo opuesto a los tipos de datos atómicos.Existen 
 //tres tipos agregados básicos:Arreglos (arrays) y Matrices (tablas), Registros, 
 //Secuencias de texto o cadenas.


 // construccion de funciones  R. un connunto de instrucciones que realiza una tarea o 
 //calcula un valor ((como una ecuacion))