function decodeNumber(symbols) {
  const symbolsRegex = /^[.,:;!]+$/;
  if (!symbolsRegex.test(symbols)) return NaN;

  const symbolsRecord = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };
  let decoded = symbolsRecord[symbols[symbols.length - 1]];


  for (let i = symbols.length - 1; i > 0; i--) {
    if ( symbolsRecord[symbols[i]] > symbolsRecord[symbols[i - 1]] ) {
      decoded -= symbolsRecord[symbols[i - 1]];
    } else {
      decoded += symbolsRecord[symbols[i - 1]];
    }
  }


  return decoded;
}

console.log( decodeNumber('...') ) // 3
console.log( decodeNumber('.,') ) // 4 (5 - 1)
console.log( decodeNumber('.........!') ) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log( decodeNumber('!!!') ) // 300
console.log( decodeNumber(';.W') ) // NaN