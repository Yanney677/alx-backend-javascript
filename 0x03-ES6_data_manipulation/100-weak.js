/* Define and export a const instance of WeakMap named weakMap */
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the current endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is >= 5
  if (count >= 5) {
    // If so, throw an error
    throw new Error('Endpoint load is high');
  }
  // console.log(`Querying API for endpoint: ${endpoint.name}`);
}

