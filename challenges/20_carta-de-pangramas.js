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