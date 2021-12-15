function checkSledJump(heights) {
  const maxJump = Math.max(...heights);
  const maxJumpIdx = heights.indexOf(maxJump);
  if (maxJumpIdx === heights.length - 1) return false;

  for (let i = 1; i < heights.length; i++) {
    if (i > maxJumpIdx) {
      if (heights[i] >= heights[i-1]) return false;
    } else {
      if (heights[i] <= heights[i-1]) return false;
    }
  }

  return true;
}

console.log( checkSledJump([1, 2, 3, 2, 1]) ) // true: sube y baja de forma estricta
console.log( checkSledJump([0, 3, 2, 1]) ) // -> true: sube y baja de forma estricta

console.log( checkSledJump([2, 4, 4, 6, 2]) ) // false: no sube de forma estricta
console.log( checkSledJump([1, 2, 3]) ) // false: sólo sube