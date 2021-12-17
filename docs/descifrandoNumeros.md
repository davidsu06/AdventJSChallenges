# Reto 16 - Descifrando los números...

Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

```jsx harmony
Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
```

Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN

```jsx harmony
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
```