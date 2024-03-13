export default function updateUniqueItems(inputMap) {
  // Check if the input is a map
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Create a new Map to store the updated items
  const updatedMap = new Map();

  // Iterate over each entry in the inputMap
  inputMap.forEach((quantity, item) => {
    // If quantity is 1, update it to 100
    if (quantity === 1) {
      updatedMap.set(item, 100);
    } else {
      // Otherwise, keep the original quantity
      updatedMap.set(item, quantity);
    }
  });

  return updatedMap;
}
