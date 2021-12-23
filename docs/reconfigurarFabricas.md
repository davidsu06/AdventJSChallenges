
# Reto 23 - ¿Puedes reconfigurar las fábricas para no parar de crear regalos?

Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. 

 ```jsx harmony
function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const configMap = {};

  for (let i = 0; i < from.length; i++) {
    if ( configMap[ to[i] ] && configMap[ to[i] ] !== from[i]  ) return false;
    if ( configMap[ from[i] ] && configMap[ from[i] ] !== to[i]  ) return false;

    configMap[ from[i] ] = to[i];
    configMap[ to[i] ] = from[i];
  }

  return true;
};

console.log( canReconfigure('BAL', 'LIB') ) // true

console.log( canReconfigure('MMM', 'MID') ) // false
```