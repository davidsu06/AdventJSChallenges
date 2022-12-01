
# Reto 17 - La locura de enviar paquetes en esta época

Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama, ya que existen rangos de nivel de experiencia.

Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número de paquetes que puede llevar esa persona y todos los transportistas que tiene en su equipo. Lo malo es que los datos están almacenados de una forma un poco rara en un array:

El array contiene otros arrays que contienen los datos de cada transportista
  transportista[0] -> Nombre/ID del Transportista
  transportista[1] -> Paquetes que gestiona en un día
  transportista[2] -> Array con sus subordinados

¡Ten cuidado! Como has visto en el segundo ejemplo, el organigrama puede tener diferentes niveles y además nos viene información que puede ser que no necesitemos. Debemos tener en cuenta el parámetro de carrierID para calcular bien el número y contar todo su equipo.

 ```jsx harmony
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
```