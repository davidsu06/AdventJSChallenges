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