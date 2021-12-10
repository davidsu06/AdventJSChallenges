
# Reto 10 - La máquina de cambio

Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

 ```jsx harmony
coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
```

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible.

 ```jsx harmony
function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const combinedCoins = Array.from( Array(6).keys() ).fill(0, 0);
  let acumChange = 0;

  while(acumChange !== change) {
    for (let i = coins.length - 1; i >= 0; i--) {
      if (coins[i] + acumChange <= change) {
        acumChange += coins[i];
        combinedCoins[i]++;
        break;
      }
    }
  }

  return combinedCoins;
};

console.log( getCoins(51) ) // [1, 0, 0, 0, 0, 1]
console.log( getCoins(3) ) // [1, 1, 0, 0, 0, 0]
console.log( getCoins(5) ) // [0, 0, 1, 0, 0, 0]
console.log( getCoins(16) ) // [1, 0, 1, 1, 0, 0]
console.log( getCoins(100) ) // [0, 0, 0, 0, 0, 2] 
```