function shouldBuyFidelity(times) {
  const singleTicketPrice = 12 * times;
  let fidelityPrice = 250;

  for (let i = 1; i <= times; i++) {
    fidelityPrice += ( 12 * Math.pow(0.75, i) );
  }

  return fidelityPrice < singleTicketPrice;
}

console.log( shouldBuyFidelity(1) ) // false -> Mejor comprar tickets de un sólo uso
console.log( shouldBuyFidelity(100) ) // true -> Mejor comprar tarjeta fidelidad