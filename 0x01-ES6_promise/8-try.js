/* Function to divide two numbers */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is equal to 0
  if (denominator === 0) {
  // Throw an error if denominator is equal to 0 
    throw Error('cannot divide by 0');
  }
  // Return the result of the division if denominator is not 0
  return numerator / denominator;
}
