
# Reto 9 - Agrupando cosas automáticamente

En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.+

La función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave

 ```jsx harmony
function groupBy(collection, it) {
  const grouped = {};

  collection.forEach( (item) => {
    let result;

    if (typeof it === 'function') result = it(item);
    else result = item[it];

    if (grouped[result]) grouped[result].push(item);
    else grouped[result] = [item];
  });

  return grouped;
}

console.log( groupBy([6.1, 4.2, 6.3], Math.floor) )
console.log( groupBy(['one', 'two', 'three'], 'length') )
console.log( groupBy([{age: 23}, {age: 24}], 'age') )
```