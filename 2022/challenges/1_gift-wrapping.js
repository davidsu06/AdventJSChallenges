function wrapping(gifts) {
  return gifts.map(gift => {
    const wrappingPaper = '*'.repeat(gift.length + 2);
    return wrappingPaper + '\n*' + gift + '*\n' + wrappingPaper;
  });
}

const gifts = ['david', 'soto'];

const wrappedGifts = wrapping(gifts)
console.log(wrappedGifts)