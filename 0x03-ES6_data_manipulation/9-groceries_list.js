export default function groceriesList() {
  // Initialize a new Map
  const finalMap = new Map();

  // Initialize an object with grocery items and their quantities
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  // Convert object keys to an array
  const list = Array.from(Object.keys(obj));

  // Map through the array and set key-value pairs in the finalMap
  list.map((item) => {
    finalMap.set(item, obj[item]);
  });

  // Return the populated finalMap
  return finalMap;
}
