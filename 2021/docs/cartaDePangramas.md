# Reto 20 - ¿Una carta de pangramas? ¡QUÉ!

En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

```jsx harmony
function pangram(letter) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.normalize('NFD').split('');
  const normalizedLetter = letter.toLowerCase().normalize('NFD').replace(/(?! )\s/g, '');

  for (let i = 0; i < alphabet.length; i++) {
    if (!normalizedLetter.includes( alphabet[i] )) return false;
  }

  return true;
}

console.log( pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') ) // true
console.log( pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') ) // false
```