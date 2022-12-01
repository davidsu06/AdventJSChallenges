
# Reto 8 - La locura de las criptomonedas

Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura.

 ```jsx harmony
function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if ( prices[j] - prices[i] > maxProfit ) maxProfit = prices[j] - prices[i];
    }
  }

  return maxProfit || -1;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log( maxProfit(pricesBtc) ); // 16

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log( maxProfit(pricesEth) ); // 60

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log( maxProfit(pricesDoge) ); // -1
```