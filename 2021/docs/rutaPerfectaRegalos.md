
# Reto 12 - La ruta perfecta para dejar los regalos

En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.

 ```jsx harmony
function getMinJump(obstacles) {
  const maxObstacle = Math.max( ...obstacles );
  let minJump = 1;
  let minJumpFound = false;

  while (!minJumpFound) { 
    let i = 0;
  
    while (i <= maxObstacle) {
      if ( obstacles.includes(i) ) {
        minJump++;
        break;
      }

      i += minJump;
      if (i > maxObstacle) minJumpFound = true;
    }
  }
  
  return minJump;
};

const obstacles = [5, 3, 6, 7, 9]
console.log( getMinJump(obstacles) ) // -> 4

const obstacles2 = [2, 4, 6, 8, 10];
console.log( getMinJump(obstacles2) ) // -> 7

const obstacles3 = [3, 7, 5];
console.log( getMinJump(obstacles3) ) // -> 2
```