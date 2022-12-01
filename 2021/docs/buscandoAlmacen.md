# Reto 7 - Buscando en el almacén...

Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacénes.

```jsx harmony
function contains(store, product) {
  let containsProduct = false;

  for (const prop in store) {
    if (typeof store[prop] === 'object') {
      containsProduct = contains(store[prop], product);
    }

    if (store[prop] === product) return true;
  }

  return containsProduct;
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
console.log( contains(almacen, 'camiseta') )
```