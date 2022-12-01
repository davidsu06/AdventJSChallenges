function countPackages(carriers, carrierID) {
  let packages = 0;

  const carrier = carriers.find( (_carrier) => _carrier[0] === carrierID );
  packages += carrier[1];

  carrier[2].forEach( (_carrier) => {
    packages += countPackages(carriers, _carrier);
  });

  return packages;
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

console.log( countPackages(carriers, 'dapelu') ) // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

console.log( countPackages(carriers2, 'camila') ) // 15