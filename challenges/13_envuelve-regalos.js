function wrapGifts(gifts) {
  if (gifts.length === 0) return [];

  const lineLength = gifts[0].length + 2;
  const wrappedGifts = [ '*'.repeat(lineLength) ];

  gifts.forEach((gift) => {
    wrappedGifts.push( '*' + gift + '*' )
  });

  wrappedGifts.push( '*'.repeat(lineLength) )

  return wrappedGifts;
}

console.log( wrapGifts(["📷", "⚽️"]) )
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log( wrapGifts(["🏈🎸", "🎮🧸"]) )
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log( wrapGifts(["📷"]) )
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/