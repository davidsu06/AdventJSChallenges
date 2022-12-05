function distributeGifts(packOfGifts, reindeers) {
  const packOfGiftsWeight = packOfGifts.join('').length;
  const reindeersMaxCarryWeight = reindeers.join('').length * 2;
  return parseInt(reindeersMaxCarryWeight / packOfGiftsWeight);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

console.log(distributeGifts(packOfGifts, reindeers))