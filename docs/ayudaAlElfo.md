# Reto 2 - ¡Ayuda al elfo a listar los regalos!

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
El tema es que es una cadena de texto y es muy difícil de leer 😱. 
¡Menos mal que han puesto cada regalo separado por espacio! 
(aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra,
por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece

```jsx harmony
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
```