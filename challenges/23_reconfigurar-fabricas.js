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
