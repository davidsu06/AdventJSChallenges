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