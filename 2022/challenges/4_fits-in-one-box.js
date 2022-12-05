function fitsInOneBox(boxes) {
  const sortedBoxes = boxes.sort((prevBox, nextBox) => prevBox.l - nextBox.l);
  let canFitInOneBox = true;

  sortedBoxes.forEach((box, idx) => {
    if (idx === sortedBoxes.length - 1) {
      return;
    }

    const nextBox = sortedBoxes[idx + 1];
    if (box.l >= nextBox.l || box.w >= nextBox.w || box.h >= nextBox.h) {
      canFitInOneBox = false;
    }
  });

  return canFitInOneBox;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
];

console.log(fitsInOneBox(boxes));