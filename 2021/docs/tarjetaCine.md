
# Reto 11 - ¿Vale la pena la tarjeta fidelidad del cine?

Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

  • Entrada de un sólo uso: Cuesta 12$ por cada película.

  • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad.

 ```jsx harmony
function shouldBuyFidelity(times) {
  const singleTicketPrice = 12 * times;
  let fidelityPrice = 250;

  for (let i = 1; i <= times; i++) {
    fidelityPrice += ( 12 * Math.pow(0.75, i) );
  }

  return fidelityPrice < singleTicketPrice;
}

console.log( shouldBuyFidelity(1) )
console.log( shouldBuyFidelity(100) )
```