const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((x) => {
    if (typeof x === 'string' && x.startsWith(startString)) {
      strings.push(x.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;
