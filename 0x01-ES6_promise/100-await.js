import { uploadPhoto, createUser } from './utils.js';

// Corrected function declaration: "async" instead of "asyn"
export default async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser functions concurrently using Promise.all
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // Return an object with responses from both functions
    return { photo, user };
  } catch (error) {
    // If any of the functions fail, return an empty object
    console.error(error); // Log the error for debugging purposes
    return { photo: null, user: null };
  }
}
