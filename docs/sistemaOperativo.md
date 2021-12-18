
# Reto 18 - El sistema operativo de Santa Claus

Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.

Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan guardar el mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.

Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo número de elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el número de veces que se encontró repetido.

 ```jsx harmony
function fixFiles(files) {
  const fixedFiles = [];
  const filesRecord = {};

  files.forEach( (file) => {
    if (filesRecord[file]) {
      fixedFiles.push(file + `(${filesRecord[file]})`);
      filesRecord[file]++;
    } else {
      fixedFiles.push(file);
      filesRecord[file] = 1;
    }
  });

  return fixedFiles;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log( fixFiles(files) ) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
console.log( fixFiles(files2) ) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
```