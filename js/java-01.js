// taller punto numero 1 

// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

// Responda a la pregunta y devuelva true si es así, de lo contrario false :)

const personaje = prompt('cuantas balas vas a cojer para matar al dragon');


if( 4 >= personaje ) {
    console.log( 'lociento te mataron un dragon quedo vivo' );
}

else {
    console.log( 'bravo mataste los dos dragones' )
}