function daysToXmas(date) {
  const xmasDate = new Date('Dec 25, 2021');
  const difference = ( xmasDate.getTime() - date.getTime() ) / (1000 * 3600 * 24);

  return Math.ceil(difference); 
}

const date = new Date('Dec 31, 2021');
const date2 = new Date('Dec 24, 2021');

console.log( daysToXmas(date) );
console.log( daysToXmas(date2) );