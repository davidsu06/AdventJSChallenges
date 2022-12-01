function isValid(letter) {
  const characters = /[a-zA-Z]/;
  const startParenthesesMatch = /\(/g;
  const endParenthesesMatch = /\)/g;

  const startParenthesis = letter.indexOf('(');
  const endParenthesis = letter.indexOf(')');
  const squareBrackets = letter.indexOf('[');
  const curlyBraces = letter.indexOf('{');
  const subStr = letter.substr(startParenthesis, endParenthesis);

  if ( letter.match(startParenthesesMatch)?.length !== letter.match(endParenthesesMatch)?.length ) return false;
  if (squareBrackets > startParenthesis && squareBrackets < endParenthesis) return false;
  if (curlyBraces > startParenthesis && curlyBraces < endParenthesis) return false;
  if (!characters.test(subStr)) return false;

  return true;
}

const test1 = "peluche (bici [coche) bici coche balón"
const test2 = "bici coche (balón) bici coche peluche"

const wrong = isValid(test1)
const right = isValid(test2)

console.log(wrong, right)