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

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
console.log( contains(otroAlmacen, 'gameboy') )