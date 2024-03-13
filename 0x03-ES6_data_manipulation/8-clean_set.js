/* A function that returns a string of all the set values that
 * start with a specific string */

export default function cleanSet(set, startString) {
  // If startString is undefined, empty, or has a length of zero, return an empty string
  if (typeof startString === 'undefined' || startString.length === 0) {
    return '';
  }

  // Filter set values that start with startString, then join them with -
  return [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.substring(startString.length))
    .join('-');
}
