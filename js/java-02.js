// taller punto numero 2

// Escribe una función que tome una lista de números y 
// devuelva la suma de los números. Los números pueden ser
// negativos o no enteros. Si la lista no contiene ningún
// número, debe devolver 0.

// Resultados esperados

const numeros = [1, 5.2, 4, 0, -1];
let suma = 0;
console.log (numeros);

for( let i = 0; i < numeros.length; i++ ) {
    suma +=  numeros[i];
}
console.log( suma );