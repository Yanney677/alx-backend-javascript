export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within range
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  // Create a new ArrayBuffer with the specified length
  const newBuffer = new ArrayBuffer(length);
  // Create a new Int8Array view on the buffer
  const int8 = new Int8Array(newBuffer, 0, length);
  // Set the value at the specified position
  int8.set([value], position);
  return new DataView(newBuffer);
}
