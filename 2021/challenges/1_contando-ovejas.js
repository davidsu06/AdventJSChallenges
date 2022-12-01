const match = /n.*a|a.*n.*/i;

function contarOvejas(ovejas) {
  return ovejas.filter( (oveja) => (
    oveja.color === 'rojo' &&
    match.test(oveja.name)
  ))
};

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
];

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)