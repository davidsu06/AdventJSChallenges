
# Reto 25 - El último juego y hasta el año que viene

Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

  Un espacio vacío es que no hay nada
  Una m es el ratón
  Un * es la comida

¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

 ```jsx harmony
function canMouseEat(direction, game) {
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === 'm') {
        if (direction === 'up' && game[i-1]?.[j] === '*') return true;
        if (direction === 'down' && game[i+1]?.[j] === '*') return true;
        if (direction === 'left' && game[i]?.[j-1] === '*') return true;
        if (direction === 'right' && game[i]?.[j+1] === '*') return true;
      }
    }
  }

  return false;
};

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
];

console.log( canMouseEat('up',    room) ) // false
console.log( canMouseEat('down',  room) ) // true
console.log( canMouseEat('right', room) ) // false
console.log( canMouseEat('left',  room) ) // false
```