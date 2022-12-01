# Reto 22 - ¿Cuántos adornos necesita el árbol?

¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.

```jsx harmony
function countDecorations(bigTree) {
  let decorations = 0;
  decorations += bigTree.value;

  if (bigTree.left) decorations += countDecorations(bigTree.left);
  if (bigTree.right) decorations += countDecorations(bigTree.right);

  return decorations;
};

const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  }
}

console.log( countDecorations(tree) );
```