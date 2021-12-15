
# Reto 15 - El salto perfecto

¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...

 ```jsx harmony
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

console.log( checkSledJump([1, 2, 3, 2, 1]) )
console.log( checkSledJump([0, 3, 2, 1]) )

console.log( checkSledJump([2, 4, 4, 6, 2]) )
console.log( checkSledJump([1, 2, 3]) )
```