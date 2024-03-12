/* Function to upload a photo */
export default function uploadPhoto(filename) {
  // Simulating photo processing failure
  return Promise.reject(Error(`${filename} cannot be processed`));
}
