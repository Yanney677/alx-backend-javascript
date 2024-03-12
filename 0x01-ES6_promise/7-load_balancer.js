// Function to balance between China and USDownloads
export default function loadBalancer(chinaDownload, USDownload) {
  /* Returning a Promise that resolves with the value of the
     first resolved Promised */
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value);
}
