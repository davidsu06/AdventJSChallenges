function createXmasTree(height) {
  const initialUnderscores = '_'.repeat(height - 1);
  const treeTrunk = initialUnderscores + '#' + initialUnderscores;
  let xmasTree = '';

  for(let i = 0; i < height; i++) {
    const underscores = '_'.repeat( initialUnderscores.length - i );
    const asterisks = '*'.repeat(i * 2 + 1);
    xmasTree+= underscores + asterisks + underscores + '\n';
  }

  xmasTree += treeTrunk + '\n';
  xmasTree += treeTrunk;

  return xmasTree;
}

console.log( createXmasTree(20) );