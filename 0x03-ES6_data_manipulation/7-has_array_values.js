/* A function that returns a boolean if all the elements
 * in the array exist within the set */

export default function hasValuesFromArray(set, array) {
  // Checks if every element in the array exists in the set
  let result = true;
  array.map((element) => {
    if (!set.has(element)) {
      result = false;
    }
  });

  return result;
}
