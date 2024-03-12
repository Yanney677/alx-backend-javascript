export default function guardrail(mathFunction) {
  // Create an empty array to store the queue
  const queue = [];
  try {
    /* Execute the mathFunction and append its return 
       value to the queue */
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error ocurs, append the error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    /* Append the message 'Guardrail was processed' to 
       the queue in every case */
    queue.push('Guardrail was processed');
  }
  // Return the queue array
  return queue;
}
