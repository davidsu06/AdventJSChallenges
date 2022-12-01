function canCarry(capacity, trip) {
  const deliveryTrack = {};
  let currentLoad = 0;

  for (const details of trip) {
    for (const track in deliveryTrack) {
      if ( details[1] >= track && deliveryTrack[track] > 0 ) {
        currentLoad -= deliveryTrack[track];
        deliveryTrack[track] = 0;
      }
    }

    currentLoad += details[0];
    deliveryTrack[ details[2] ] = details[0];
    if (currentLoad > capacity) return false;
  }

  return true;
}

console.log( canCarry(3, [[1, 1, 5], [2, 2, 10]]) ) // true
console.log( canCarry(2, [[1, 2, 4], [2, 3, 8]]) ) // false