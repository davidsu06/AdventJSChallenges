function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const combinedCoins = Array.from( Array(6).keys() ).fill(0, 0);
  let acumChange = 0;

  while(acumChange !== change) {
    for (let i = coins.length - 1; i >= 0; i--) {
      if (coins[i] + acumChange <= change) {
        acumChange += coins[i];
        combinedCoins[i]++;
        break;
      }
    }
  }

  return combinedCoins;
};

console.log( getCoins(51) ) // [1, 0, 0, 0, 0, 1]
console.log( getCoins(3) ) // [1, 1, 0, 0, 0, 0]
console.log( getCoins(5) ) // [0, 0, 1, 0, 0, 0]
console.log( getCoins(16) ) // [1, 0, 1, 1, 0, 0]
console.log( getCoins(100) ) // [0, 0, 0, 0, 0, 2] 