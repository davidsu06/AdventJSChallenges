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