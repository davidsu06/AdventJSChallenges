function groupBy(collection, it) {
  const grouped = {};

  collection.forEach( (item) => {
    let result;

    if (typeof it === 'function') result = it(item);
    else result = item[it];

    if (grouped[result]) grouped[result].push(item);
    else grouped[result] = [item];
  });

  return grouped;
}

console.log( groupBy([6.1, 4.2, 6.3], Math.floor) ) // { 6: [6.1, 6.3], 4: [4.2] }
console.log( groupBy(['one', 'two', 'three'], 'length') ) // { 3: ['one', 'two'], 5: ['three'] }
console.log( groupBy([{age: 23}, {age: 24}], 'age') ) // { 23: [{age: 23}], 24: [{age: 24}] }

console.log(
  groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
  )
) // { 2013: [1363223700000], 2014: [1397639141184] }