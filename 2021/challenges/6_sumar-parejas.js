function sumPairs(numbers, result) {
  const sumPair = [];

  for (let i = 0; i < numbers.length; i++) {
    let foundPair = false;

    for (let j = i + 1; j < numbers.length; j++) {
      if ( numbers[i] + numbers[j] === result ) {
        sumPair.push( ...[numbers[i], numbers[j]] );
        foundPair = true;
        break;
      }
    }

    if (foundPair) break;
  }

  return ( sumPair.length ? sumPair : null );
};

console.log( sumPairs([3, 5, 7, 2], 10) );
console.log( sumPairs([-3, -2, 7, -5], 10) );
console.log( sumPairs([6, 7, 1, 2], 8) );