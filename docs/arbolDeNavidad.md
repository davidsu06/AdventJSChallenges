
# Reto 4 - ¡Es hora de poner la navidad en casa!

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

 ```jsx harmony
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
```