function listGifts(letter) {
  const trimmedLetter = letter.trim();
  const splittedLetter = trimmedLetter.split(' ').filter( split => split );
  const gifts = {};

  splittedLetter.forEach( (gift) => {
      if (gift.charAt(0) === '_') return;
  
      if (gifts[gift]) gifts[gift]++;
      else gifts[gift] = 1;
  });

  return gifts;
}

const carta = 'bici coche balón _playstation bici coche peluche';
console.log(listGifts(carta));