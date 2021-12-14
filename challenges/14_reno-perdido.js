function missingReindeer(ids) {
  const orderedIds = ids.sort( (a,b) => a - b );
 
  for (let i = 0; i < orderedIds.length; i++) {
    if (orderedIds[i] !== i) return i;
  }

  return ids.length;
};

console.log( missingReindeer([0, 2, 3]) ) // -> 1
console.log( missingReindeer([5, 6, 1, 2, 3, 7, 0]) ) // -> 4