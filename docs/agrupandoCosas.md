
# Reto 9 - Agrupando cosas autom谩ticamente

En la f谩brica de Papa No茅l 馃巺 se acerca el d铆a especial... y todav铆a tenemos un mont贸n de cosas por contar. 馃槄

Por suerte a Mark Zucktheelf 馃 se le ha ocurrido crear una funci贸n que permita agrupar un array, que puede ser de valores u objetos, a trav茅s de una funci贸n o de una propiedad.+

La funci贸n groupBy recibe una colecci贸n (array) y una funci贸n o una propiedad, y devuelve un objeto con claves que son los valores de la funci贸n ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave

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